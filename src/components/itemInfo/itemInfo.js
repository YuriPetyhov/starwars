import  React from 'react';
import style from './itemInfo.module.scss';
import  Preloader from '../../services/preloader';
import placeholder from "../../img/placeholder.jpg";

class info extends React.Component {
    state = {
        item: 2,
        isLoaded: false,
        image: null
    };

    updateInfo () {
        const{itemId} = this.props;
        this.setState({isLoaded: false});
        if(!itemId) {
              return
            }

        const{getData} = this.props;
        getData
        .then((respons) => {
            this.setState({
                isLoaded: true,
                item: respons,
                image: this.props.image
            })
        })
    }

    componentDidMount() {
        this.updateInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateInfo()
        }
    }

    imgOnload = () => {
        this.setState({imgOnLoaded: true})
    };

    render() {
        const{isLoaded, image, item } = this.state;
        const{info, list, infoStarShips} = style;
        const{classParam} = this.props;

        return (
                <div className= { classParam ? infoStarShips : info}>
                    {isLoaded
                     ? <React.Fragment>
                            <img src={image} alt=""
                                 onLoad={this.imgOnload} onError={(e) => {e.target.src = placeholder} }
                            />

                        <ul className={list}>
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, { item })
                                })
                            }

                        </ul>
                    </React.Fragment>
                    : <Preloader />}
                </div>
        )
    }
}



export default info;