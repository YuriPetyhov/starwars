import  React from 'react';
import style from './starshipInfo.module.scss';
import  Preloader from '../../services/preloader';
import placeholder from '../../img/placeholder.jpg';

class planetInfo extends React.Component {
    state = {
        starhip: 2,
        isLoaded: false,
        imgOnLoaded: false
    };

    updateInfo () {
        const{starShipId} = this.props;
        this.setState({isLoaded: false})
        if(!starShipId) {
            return
        }
        const{getData} = this.props;
        getData
            .getStarship(starShipId)
            .then((starhip) => {
                this.setState({
                    isLoaded: true,
                    starhip: starhip
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
        if(this.props.starShipId !== prevProps.starShipId) {
            this.updateInfo()
        }
    }


    render() {
        const{isLoaded, imgOnLoaded} = this.state;
        const{name, model, manufacturer, id} = this.state.starhip;
        const{personalinfo, list} = style;
        return (
            <div className={personalinfo}>

                {isLoaded
                    ? <React.Fragment>
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${this.props.starShipId}.jpg`}
                             onLoad={this.imgOnload} onError={(e) => {e.target.src = placeholder} }/>
                        <ul className={list}>
                            <li> Name: {name} </li>
                            <li> Model: {model} </li>
                            <li> Manufacturer: {manufacturer} </li>
                        </ul>
                    </React.Fragment>
                    : <Preloader />}
            </div>
        )
    }
}

export default planetInfo;