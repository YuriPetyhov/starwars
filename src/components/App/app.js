import React from 'react';
import Header from '../Header/header';
import RandomPlanet from '../Random-planet/randomPlanet';
<<<<<<< HEAD
import PersonPage from '../../components/Person/personPage';
import PlanetPage from '../../components/Planet/planetPage';
import StarshipPage from '../../components/Starship/starship';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {TechnicalWork} from "../Technical-work/technical";

import styles from './app.module.scss';
import getApi from '../../common/getApi';
import {Record} from "../Details/details";
import StarshipInfo from "../itemInfo/itemInfo";

export default class App extends React.Component{

    render(){
        return (
            <div className="container">
                <Router>
                <Header />
                <RandomPlanet />

                <Route exact path='/' component={()=> <TechnicalWork /> } />

                <Route  path='/people/:id?' render = {() =>
                    <PersonPage
                        getData = {getApi}
                />}
                />
                <Route path='/planet/:id?' render={ ()=>
                    <PlanetPage
                        getData = {getApi}
                     />
                } />


                <Route path='/starship' exact render={ () =>
                    <StarshipPage
                        getData = {getApi}
                    />
                 }/>

                    <Route  path='/starship/:id'  render={({match}) => {
                        const {id} = match.params;
                        return <StarshipInfo
                            getData={getApi.getStarship(id)}
                            itemId={id}
                            image = {getApi.getStarShipImg(id)}
                            classParam= "true"
                        >
                            <Record field='name' label='Name:' />
                            <Record field='max_atmosphering_speed' label='Max speed:' />
                            <Record field='starship_class' label='Starship class:' />
                        </StarshipInfo>
                        }
                    } />

                </Router>
=======
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

>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
            </div>
        )
    }
   
  }
