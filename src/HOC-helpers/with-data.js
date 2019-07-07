import React from 'react';
import  Preloader from '../services/preloader';
import placeholder from "../img/placeholder.jpg";
import style from "../components/Person-list/personList.module.scss";


const withData = (ViewComponent, getData) => {
    return class extends React.Component {
        state = {
            data: null,
        };

        componentDidMount() {
            getData
                .then((respons) => (
                    this.setState({data: respons})))
        }

        render() {
            const{ data } = this.state;
            if(!data) {
                return (
                    <div className={style.personList}>
                        <Preloader/>
                    </div>
                )
            }
            return <ViewComponent {...this.props} data={data}/>
        }

    }
};


export default withData