import React from 'react';
import styles from './randomPlanet.module.scss';
import getApi from "../../common/getApi.js";
import Preloader from '../../services/preloader';
import ViewPlanet from './viewPlanet';

class RandomPlanet extends React.Component {
    state = {
       planet: [],
       planetIsLoding: false
    };
    componentDidMount() {
        this.updateRandomPlanet();
    }

    _planetSet = (planet) => {
      
        this.setState({planet, planetIsLoding: true})
    }
    updateRandomPlanet(){
        const id = Math.floor(Math.random() * 25) + 2;
        getApi
            .getPlanet(id)
            .then(this._planetSet)
    }
    render() {
        const{ planet, planetIsLoding } = this.state;
<<<<<<< HEAD
        return <div className={styles.randomPlanetBlock}>
            {!planetIsLoding
                ? <Preloader/>
                : <ViewPlanet planet={planet}/>
            }
            </div>
                }
=======
        return !planetIsLoding 
                ? <div className={styles.randomPlanetBlock}> <Preloader/> </div>
                : <ViewPlanet planet = {planet} />
            }    
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
}
export default RandomPlanet;