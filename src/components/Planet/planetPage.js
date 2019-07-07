import React,{Component,Fragment} from "react";
import PlanetList from '../Planet-list/planetList';
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