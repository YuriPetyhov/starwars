import React from 'react';
import Header from '../Header/header';
import RandomPlanet from '../Random-planet/randomPlanet';
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
            </div>
        )
    }
   
  }
