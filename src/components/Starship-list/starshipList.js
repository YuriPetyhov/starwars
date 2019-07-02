import React from "react";
import Preloader from '../../services/preloader';
import style from './starship.module.scss';
const uuidv1 = require('uuid/v1');



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