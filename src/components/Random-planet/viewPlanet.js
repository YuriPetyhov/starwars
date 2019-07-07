import React from 'react';
import styles from './viewPlanet.module.scss';
<<<<<<< HEAD
import placeholder from "../../img/placeholder.jpg";
=======
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130

const ViewPlanet = ({planet}) => {
     let{name, population, rotationPeriod, diameter, id} = planet;
    return (
        <React.Fragment>
            <div className={styles.randomPlanetBlock}>
<<<<<<< HEAD
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""
                      onError={(e) => {e.target.src = placeholder} }
                />
=======
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
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