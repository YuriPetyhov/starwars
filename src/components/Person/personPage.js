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
                        renderItem = {({name, birth_year, eye_color}) =>
                            ( <span> {name} ({birth_year} {eye_color} )</span> )}

                    />
                } right={
                    <PersonalInfo
                        getData = {getData}
                        personId = {personId}
                    />
                }
                />
        )
    }
};

