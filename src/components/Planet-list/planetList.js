import React from "react";
<<<<<<< HEAD
import getApi from '../../common/getApi';
import withData from '../../HOC-helpers/with-data';
=======
import Preloader from '../../services/preloader';
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
import style from './planetList.module.scss';
const uuidv1 = require('uuid/v1');


<<<<<<< HEAD
const PlanetList = (props) =>  {

    const selectPlanets = (id) => {
        props.selectPlanet(id);
    };

    const{ data, onItemClick } = props;

    return (
         <div className={style.list}>
                <ul>
                    {data.map((item) => {
                        const label = props.renderItem(item)
                        return (
                            <li
                                key={uuidv1()}
                                onClick={() => onItemClick(item.id)}>
                                {label}
                            </li>
                        )
                    })}
                </ul>
            </div>
    )
};

const allPlanets = getApi.getaAllPlanet()
export default withData(PlanetList, allPlanets)
=======
class PlanetList extends  React.Component {
    state = {
        selectPerson: null,
        planet: null
    };

    getAllPlanet() {
        const {getData} =  this.props;
        getData
            .getaAllPlanet()
            .then((respons) => (
                this.setState({planet: respons})))
    }

    componentDidMount() {
        this.getAllPlanet();
    }

    selectPlanets(id) {
        this.props.selectPlanet(id);
    }

    render() {
        const{ planet } = this.state;
        return (
            !planet
                ?  <Preloader />
                : <div className={style.personList}>
                    <ul>
                        {planet.map((item) => {
                            const label = this.props.renderItem(item)
                            return (
                                <li
                                    key={uuidv1()}
                                    onClick={() => this.selectPlanets(item.id)}>
                                    {label}
                                </li>
                            )
                        })}
                    </ul>
                </div>
        )
    }
}
export default PlanetList;
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
