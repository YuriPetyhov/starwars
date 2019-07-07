import React from "react";
import getApi from '../../common/getApi';
import withData from '../../HOC-helpers/with-data';
import style from './starship.module.scss';
const uuidv1 = require('uuid/v1');


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