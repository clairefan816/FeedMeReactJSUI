import React, {Component} from 'react';
import axios from 'axios';

class Preparing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orderStatus: 'Preparing',
            orderId: '',
            showError: false,
            showUpdate: false,
        };
    }

    handleOrderIdChange = (event) => {
        this.setState({orderId: event.target.value, showUpdate: false});
    }

    handleOrderStatusChange = (event) => {
        this.setState({orderStatus: event.target.value.toUpperCase(), showUpdate: false});
    }

    submit = (event) => {
        const data = {
            id: this.state.orderId,
            status: this.state.orderStatus,
        }
        console.log(data);
        axios.interceptors.request.use(request => {
            console.log('Starting Request', JSON.stringify(request, null, 2))
            return request;
        })
        axios.put('http://0.0.0.0:5000/order/status', {...data})
            .then(
                res => {
                    this.setState({showUpdate: true});
                },
                rej => {
                    console.log('Error happens when registering user');
                    this.setState({showError: true});
                }
            );
        event.preventDefault();
    }

    render() {
        return (
            <div className="Pickup">
                <form onSubmit={this.submit}>
                    <label htmlFor="orderId">Order Id: </label>
                    <input type="text" name="orderId" onChange={this.handleOrderIdChange}/><br/><br/>
                    <label>
                        Choose order status: {"  "}
                        <select value={this.state.userType} onChange={this.handleOrderStatusChange}>
                            <option value='Preparing'>Preparing</option>
                            <option value='Ready'>Ready</option>
                        </select>
                    </label><br/><br/>
                    <input type="submit" value="Submit"/>
                    <br/><br/>
                    {
                        this.state.showError &&
                        <p className="Error">Please input correct order id or status.</p>
                    }
                    {
                        this.state.showUpdate &&
                        <p className="Success">Order status is updated.</p>
                    }
                </form>
            </div>
        )
    }
}

export default Preparing;