import React,{Component,Fragment} from "react";
import StarshipList from '../Starship-list/starshipList';
<<<<<<< HEAD
import { withRouter } from "react-router";

class StarshipPage extends Component{

    render() {
        const{getData, history} = this.props;
          return  <StarshipList
                getData = {getData.getAllStarships}
                renderItem = {({name}) => name }
                history = {history}
            />
    }
}

export default withRouter(StarshipPage)
=======
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

>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
