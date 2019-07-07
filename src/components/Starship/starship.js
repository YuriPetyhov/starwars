import React,{Component,Fragment} from "react";
import StarshipList from '../Starship-list/starshipList';
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
