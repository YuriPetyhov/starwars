import React from 'react';
import Header from '../Header/header';
import RandomPlanet from '../Random-planet/randomPlanet';
import {PersonPage} from '../../components/Person/personPage';
import {PlanetPage} from '../../components/Planet/planetPage';
import {StarshipPage} from '../../components/Starship/starship';

import styles from './app.module.scss';
import getApi from '../../common/getApi';

export default class App extends React.Component{
    state = {
        selectPerson: 2,
        selectPlanet: 2,
        selectStarship: 22
    }

     setSelectPerson = (id) => {
        this.setState({selectPerson: id});
    };
    setSelectPlanet = (id) => {
        this.setState({selectPlanet: id});
    };

    setSelectStarship = (id) => {
        this.setState({selectStarship: id});
    };


    render(){
        const{flexwrap} = styles;
        return (
            <div className="container">
                <Header />
                <RandomPlanet />

                    <PersonPage
                        getData = {getApi}
                        selectPerson = {this.setSelectPerson}
                        personId = {this.state.selectPerson}
                    />

                    <PlanetPage
                        getData = {getApi}
                        selectPlanet = {this.setSelectPlanet}
                        planetId = {this.state.selectPlanet}
                    />

                    <StarshipPage
                        getData = {getApi}
                        selectStarship = {this.setSelectStarship}
                        starShipId = {this.state.selectStarship }
                    />

            </div>
        )
    }
   
  }
