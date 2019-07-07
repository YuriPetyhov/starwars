import React from 'react';
import styles from './viewPlanet.module.scss';
import placeholder from "../../img/placeholder.jpg";

const ViewPlanet = ({planet}) => {
     let{name, population, rotationPeriod, diameter, id} = planet;
    return (
        <React.Fragment>
            <div className={styles.randomPlanetBlock}>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""
                      onError={(e) => {e.target.src = placeholder} }
                />
                <ul className={styles.list}>
                    <li>{name}</li>
                    <li>Population <span>{population}</span></li>
                    <li>Rotation Perlod <span>{rotationPeriod}</span></li>
                    <li>Diameter <span>{diameter}</span></li>
                </ul>
            </div>
        </React.Fragment>
         
    )
}

export default ViewPlanet;