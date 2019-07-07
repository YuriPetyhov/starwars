import React from "react";
import getApi from '../../common/getApi';
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