import  React from 'react';
import getApi from '../../common/getApi';
import style from './planetInfo.module.scss';
import  Preloader from '../../services/preloader';
import placeholder from '../../img/placeholder.jpg';

class planetInfo extends React.Component {
    state = {
        planet: 2,
        isLoaded: false,
        imgOnLoaded: false
    };

    updateInfo () {
        const{planetId} = this.props;
        this.setState({isLoaded: false})
        if(!planetId) {
            return
        }
        const{getData} = this.props;
        getData
            .getPlanet(planetId)
            .then((planet) => {
                this.setState({
                    isLoaded: true,
                    planet: planet
                })
            })
    }

    imgOnload = () => {
        this.setState({imgOnLoaded: true})
    };


    componentDidMount() {
        this.updateInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.planetId !== prevProps.planetId) {
            this.updateInfo()
        }
    }


    render() {
        const{isLoaded, imgOnLoaded} = this.state;
        const{name, population, rotationPeriod, diameter ,id} = this.state.planet;
        const{personalinfo, list} = style;
        return (
            <div className={personalinfo}>

                {isLoaded
                    ? <React.Fragment>
                          <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                            onLoad={this.imgOnload} onError={(e) => {e.target.src = placeholder} }/>
                           <ul className={list}>
                            <li> Name: {name} </li>
                            <li> population: {population} </li>
                            <li> rotation - Period: {rotationPeriod} </li>
                            <li> diameter: {diameter} </li>
                        </ul>
                    </React.Fragment>
                     : <Preloader />}
            </div>
        )
    }
}

export default planetInfo;