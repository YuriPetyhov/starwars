import React from "react";
import getApi from '../../common/getApi';
<<<<<<< HEAD
import withdata from '../../HOC-helpers/with-data';
import style from './personList.module.scss';
const uuidv1 = require('uuid/v1');

const PersonList = (props) => {
    const{ data, history, onItemClick } = props;

    return (
        <div className={style.list}>
            <ul>
                {data.map((item) => {
                    const label = props.renderItem(item)
                    return (
                        <li
                            key={uuidv1()}
                            onClick={() => {
                                const id = getApi._getid(item);
                                onItemClick(id)
                            }}>
                            {label}
                        </li>
                        )
                    })
                }
            </ul>

        </div>
    )
};
const getAllPeoples = getApi.getAllPeople();
export default withdata(PersonList, getAllPeoples);
=======
import Preloader from '../../services/preloader';
import style from './personList.module.scss';
const uuidv1 = require('uuid/v1');



class PersonList extends  React.Component {
    state = {
        item: null,
    };

    getAllPerson () {
        const {getData} =  this.props;
            getData
            .getAllPeople()
            .then((respons) => (
                this.setState({item: respons})))
    }

    componentDidMount() {
        this.getAllPerson();
    }

    selectedPerson(url) {
        const id = getApi._getid(url)
        this.props.selectPerson(id);
    }

    render() {
        const{ item } = this.state;
       return (
            <div className={style.personList}>
                {!item
                    ? <Preloader />
                    : <ul>
                        {item.map((item) => {
                            const label = this.props.renderItem(item)
                            return (
                                <li
                                    key={uuidv1()}
                                    onClick={() => this.selectedPerson(item)}>
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
export default PersonList;
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
