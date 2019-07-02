import React,{Component,Fragment} from "react";
import PlanetList from '../Planet-list/planetList';
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