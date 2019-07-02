import React from "react";
import Preloader from '../../services/preloader';
import style from './planetList.module.scss';
const uuidv1 = require('uuid/v1');


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