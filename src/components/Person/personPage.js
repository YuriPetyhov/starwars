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
                        renderItem = {({name, birth_year, eye_color}) =>
                            ( <span> {name} ({birth_year} {eye_color} )</span> )}

                    />
                } right={
                    <PersonalInfo
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
