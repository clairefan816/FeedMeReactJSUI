import React, {Component} from 'react';
import './Cart.css'
import deleteIcon from './delete.png'
import {Redirect} from "react-router-dom";
import axios from "axios"


class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            orderDetail: {}
        }
    }

    orderNow = () => {
        axios.post('http://0.0.0.0:5000/order', {userId: window.sessionStorage.getItem('userId')})
            .then(
                res => {
                    this.setState({redirect : true, orderDetail: res.data})
                },
                rej => {
                    console.log('Error happens when putting an order');
                }
            );
    }


    render() {
        return (
            <div className="Side_cart">
                <div className="popup">
                    <div className="cart">
                        <h2>{this.props.content.userName}'s Cart</h2>
                        <div>
                            {this.props.content.items.map((item, id) => {
                                return <div className="cart_item" key={id}>
                                    <span><h3>{item.meal.mealName}({item.quantity})</h3>
                                        <h3><img src={deleteIcon} alt="delete"/>${item.quantity * item.meal.mealPrice}</h3></span>
                                </div>
                            })}
                        </div>
                        <div>
                            <div className="final_price">
                                <div className="cart_item">
                                    <h3>Items Price:</h3>
                                    <h3>${this.props.content.itemsPrice}</h3>
                                </div>
                                <div className="cart_item">
                                    <h3>Delivery Charges:</h3>
                                    <h3>${this.props.content.deliveryCharges}</h3>
                                </div>
                                <div className="cart_item">
                                    <h3>Packaging:</h3>
                                    <h3>${this.props.content.packaging}</h3>
                                </div>
                            </div>
                            <div className="final_price">
                                <h3>Total Price:</h3>
                                <h3>${this.props.content.totalPrice}</h3>
                            </div>
                            {this.state.redirect &&
                                <Redirect to={{
                                    pathname: "/status",
                                    state: {orderDetail: this.state.orderDetail}
                                }}/>
                            }
                            {this.props.content.items.length !== 0 &&
                                <button className="Order_btn" onClick={() => {this.orderNow()}}>Order Now</button>
                            }
                            {/*<NavLink className="Order_btn" to='/status' onClick={() => {this.orderNow()}}>Order Now</NavLink>*/}
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Cart;