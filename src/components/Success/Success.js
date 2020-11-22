import React, { Component } from 'react';
import Successful from './009-car.png';
import './Success.css'
import {BrowserRouter, NavLink} from "react-router-dom";

class Success extends Component {
    render() {
        return(
                <div className="success">
                    <p1>Successfully Ordered!</p1>
                    <p>Your Order Number is 00000</p>
                    <p>It will be delivered in 10 minutes</p>
                    <img src={Successful} alt="success"/>
                    <NavLink className="order_btn" to={'/home'}>Go Back to Shopping</NavLink>
                    {/*<button className="order_btn">Go Back to Shopping</button>*/}
                </div>
        )
    }
}

export default Success;