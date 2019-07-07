import React from "react";
<<<<<<< HEAD
import getApi from '../../common/getApi';
import withData from '../../HOC-helpers/with-data';
=======
import Preloader from '../../services/preloader';
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
import style from './starship.module.scss';
const uuidv1 = require('uuid/v1');


<<<<<<< HEAD
const starShipList = (props) =>  {
    const{ data, history } = props;

    return (
        <div className={style.list}>
            <ul>
                {data.map((item) => {
                    const label = props.renderItem(item)
                    return (
                        <li
                            key={uuidv1()}
                            onClick={() => {
                                history.push(item.id)}
                            }>
                            {label}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

const allStarship = getApi.getAllStarships();
export default withData(starShipList, allStarship);
=======

class StarshipList extends  React.Component {
    state = {
        item: null,
    };

    getAllStarships () {
        const {getData} =  this.props;
        getData
            .getAllStarships()
            .then((respons) => (
                this.setState({item: respons})))
    }

    componentDidMount() {
        this.getAllStarships();
    }

    selectedStarship(url) {
        const {getData} =  this.props;
        const id = getData._getid(url);
        console.log(id)
        this.props.selectStarship(id);
    }

    render() {
        const{ item } = this.state;
        return (
            <div className={style.personList}>
                {!item
                    ? <Preloader />
                    : <ul>
                        {item.map((elem) => {
                            const label = this.props.renderItem(elem);
                            return (
                                <li
                                    key={uuidv1()}
                                    onClick={() => this.selectedStarship(elem)}>
                                    {label}
                                </li>
                            )
                        })
                        }
                    </ul>
                }
            </div>
        )
    }
}
export default StarshipList;
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
