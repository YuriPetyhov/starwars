import  React from 'react';
import getApi from '../../common/getApi';
import style from './personalInfo.module.scss';
import  Preloader from '../../services/preloader';
import placeholder from "../../img/placeholder.jpg";

class personaInfo extends React.Component {
    state = {
        person: 2,
        isLoaded: false
    };

    updateInfo () {
        const{personId} = this.props;
        this.setState({isLoaded: false})
        if(!personId) {
              return
            }
        const{getData} = this.props;
        getData
        .getPeople(personId)
        .then((person) => {
            this.setState({isLoaded: true, person: person})
        })
    }

    componentDidMount() {
        this.updateInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.personId !== prevProps.personId) {
            this.updateInfo()
        }
    }

    imgOnload = () => {
        this.setState({imgOnLoaded: true})
    };
    render() {
        const{isLoaded} = this.state;
         const{name, height, hair_color, } = this.state.person;
         const{personalinfo, list} = style;

        return (
                <div className={personalinfo}>
                    {isLoaded
                     ? <React.Fragment>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${this.props.personId}.jpg`} alt=""
                                 onLoad={this.imgOnload} onError={(e) => {e.target.src = placeholder} }
                            />

                        <ul className={list}>
                            <li> Name: {name} </li>
                            <li> Height: {height} </li>
                            <li> Hair: {hair_color} </li>
                        </ul>
                    </React.Fragment>
                    : <Preloader />}
                </div>
        )
    }
}

export default personaInfo;