import React, {Component} from 'react'
import axios from 'axios';
import "./SideBar.css"
import PE from '../../assets/PE.png';
import KFC from '../../assets/KFC.png';
import HL from '../../assets/HL.png';
import {NavLink} from "react-router-dom";
import MenuBuilder from "../../containers/MenuBuilder/MenuBuilder"
import PropTypes from "prop-types"
import OrderBuilder from "../../containers/OrderBuilder/OrderBuilder"


class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant: {},
            assets: {
                HappyLemo: HL,
                KFC: KFC,
                PandaExpress: PE
            },
            showMenu: ""
        }
    }

    componentDidMount() {
        axios.get('http://0.0.0.0:5000/restaurant')
            .then(
                res => {
                    let restaurantMap = {};
                    res.data.forEach(
                        (rest) => {
                            restaurantMap[rest.id] = rest;
                        }
                    )
                    this.setState({restaurant: restaurantMap});
                },
                rej => {
                    console.log('Error happens when getting restaurants.');
                }
            );
    }

    render() {
        let restaurantsDom = [];
        for (const restId in this.state.restaurant) {
            const rest = this.state.restaurant[restId]
            restaurantsDom.push(
                <span className="rest" key={rest.id}>
                        <img className='logo_image' src={this.state.assets[rest.name]} alt="logo"/>
                        <p className="restName" onClick={() => {
                            this.setState({showMenu: rest.id});
                        }}>{rest.name}</p>
                </span>
            )
        }
        return (
            <>
                <div className="SideBar">
                    {restaurantsDom}
                </div>
                {this.state.showMenu === "" ? null :
                    <MenuBuilder
                        menu={this.state.restaurant[this.state.showMenu].menu}
                        onChange = {this.props.onChange}
                    />}
            </>
        )
    }
}

SideBar.protoType = {
    onChange: PropTypes.func.isRequired
}

export default SideBar;