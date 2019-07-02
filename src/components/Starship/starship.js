import React,{Component,Fragment} from "react";
import StarshipList from '../Starship-list/starshipList';
import StarshipInfo from '../Starship-info/starshipInfo';
//import styles from './starship.module.scss';
import Row from '../../common/wrapper';

export class StarshipPage extends Component{

    render() {
        const{getData, selectStarship, starShipId} = this.props;
        return (
            <Row left={
                <StarshipList
                    getData = {getData}
                    selectStarship={selectStarship}
                    renderItem = {({name}) => name }
                /> }
                 right={
                     <StarshipInfo getData={getData} starShipId={starShipId} />
                 }
            />
        )
    }
}

