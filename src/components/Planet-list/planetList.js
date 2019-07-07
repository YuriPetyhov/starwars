import React from "react";
import getApi from '../../common/getApi';
import withData from '../../HOC-helpers/with-data';
import style from './planetList.module.scss';
const uuidv1 = require('uuid/v1');


const PlanetList = (props) =>  {

    const selectPlanets = (id) => {
        props.selectPlanet(id);
    };

    const{ data, onItemClick } = props;

    return (
         <div className={style.list}>
                <ul>
                    {data.map((item) => {
                        const label = props.renderItem(item)
                        return (
                            <li
                                key={uuidv1()}
                                onClick={() => onItemClick(item.id)}>
                                {label}
                            </li>
                        )
                    })}
                </ul>
            </div>
    )
};

const allPlanets = getApi.getaAllPlanet()
export default withData(PlanetList, allPlanets)