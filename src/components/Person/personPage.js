<<<<<<< HEAD
import React from "react";
import PersonList from '../Person-list/personList';
import PersonalInfo from '../itemInfo/itemInfo';
import Row from '../../common/wrapper';
import {Record} from "../Details/details";
import { withRouter } from "react-router";

const PersonPage = (props) => {
        const{getData, history, match} =  props;
        const{id} = match.params;
        return (
                <Row left = {
                    <PersonList
                        onItemClick = {(id) => history.push(id) }
=======
import React,{Component,Fragment} from "react";
import PersonList from '../Person-list/personList';
import PersonalInfo from '../Personal-info/personal-info';
import styles from './personPage.module.scss';
import Row from '../../common/wrapper';


export class PersonPage extends Component{
    render() {
        const{getData, selectPerson, personId} = this.props;
        return (
                <Row left = {
                    <PersonList
                        getData={getData}
                        selectPerson = {selectPerson}
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
                        renderItem = {({name, birth_year, eye_color}) =>
                            ( <span> {name} ({birth_year} {eye_color} )</span> )}

                    />
                } right={
                    <PersonalInfo
<<<<<<< HEAD
                        getData = {getData.getPeople(id)}
                        itemId = {id}
                        image = {getData.getPersonImg(id)}
                    >
                        <Record field='name' label='Name:' />
                        <Record field='height' label='Height:' />
                        <Record field='skin_color' label='Skin color:' />
                    </PersonalInfo>
                }
                />
        )
};

export default withRouter(PersonPage)
=======
                        getData = {getData}
                        personId = {personId}
                    />
                }
                />
        )
    }
};

>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
