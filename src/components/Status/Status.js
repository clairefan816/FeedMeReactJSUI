import React, {Component} from 'react';
import Successful from './009-car.png';
import './Success.css'
import {BrowserRouter, NavLink} from "react-router-dom";
import axios from "axios"

class Status extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderId: this.props.location.state.orderDetail.id,
            updateCount: 0,
            status: '',
            total: 0,
        }
    }

    fetchOrder = () => {
        axios.get(`http://0.0.0.0:5000/order/${this.state.orderId}`)
            .then(
                res => {
                    console.log(res.data);
                    this.setState({
                        updateCount: this.state.updateCount + 1,
                        status: res.data.status,
                        total: res.data.total
                    });
                },
                rej => {
                    console.log('Error happens when querying order status');
                    this.setState({
                        updateCount: this.state.updateCount + 1
                    });
                }
            );
    }

    componentDidMount() {
        this.fetchOrder();
        this.refresh = setInterval(
            this.fetchOrder,
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.refresh);
    }

    render() {
        return (
            <div className="success">
                <p1>Successfully Ordered!</p1>
                <p>Your Order Number is {this.state.orderId}</p>
                <p>Total price: {this.state.total}$</p>
                <p>Order status: {this.state.status.toLowerCase()}</p>
                <img src={Successful} alt="success"/>
                <NavLink className="order_btn" to={'/home'}>Go Back to Shopping</NavLink>
                {/*<button className="order_btn">Go Back to Shopping</button>*/}
            </div>
        )
    }
}

export default Status;