import React,{Component,Fragment} from "react";
import PlanetList from '../Planet-list/planetList';
<<<<<<< HEAD
import PlanetInfo from '../itemInfo/itemInfo';
import Row from '../../common/wrapper';
import {Record} from "../Details/details";
import { withRouter } from "react-router";

 const PlanetPage = (props) => {

    const{getData, history, match} =  props;
    const{id} = match.params;
    return (
        <Row left={
            <PlanetList
                getData={getData}
                onItemClick={(id) => history.push(id)}

                renderItem = {({name,population}) =>
                    ( <span> {name} ({population}  )</span> )}

            />}
             right={
                 <PlanetInfo
                     getData={getData.getPlanet(id)}
                     itemId={id}
                     image = {getData.getPlanetImg(id)}
                 >

                    <Record field='name' label="Name:" />
                    <Record field='population' label="Population:" />
                    <Record field='rotationPeriod' label="Rotation:" />
                    <Record field='diameter' label="Diameter:" />

                 </PlanetInfo>
             }
        />
    )
};

 export default withRouter(PlanetPage)
=======
import PlanetInfo from '../Planet-info/planetInfo';
import styles from './planetPage.module.scss';

import Row from '../../common/wrapper';

export class PlanetPage extends Component{

    render() {
        const{getData, selectPlanet, planetId} = this.props;
        return (
            <Row left={
                <PlanetList
                      getData = {getData}
                      selectPlanet={selectPlanet}
                      renderItem = {({name}) => name }
                /> }
                 right={
                     <PlanetInfo getData={getData} planetId={planetId} />
                 }
            />
        )
    }
}
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
