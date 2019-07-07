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
        return <div className={styles.randomPlanetBlock}>
            {!planetIsLoding
                ? <Preloader/>
                : <ViewPlanet planet={planet}/>
            }
            </div>
                }
}
export default RandomPlanet;