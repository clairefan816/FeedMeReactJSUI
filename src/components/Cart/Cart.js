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

    deleteMeal = (meal) => {
        let data = {};
        data['id'] = window.sessionStorage.getItem('userId');
        console.log(data['id']);
        data['mealPrice'] = meal.mealPrice.toString();
        data['mealName'] = meal.mealName;
        data['mealId'] = meal.mealId;
        data['operation'] = "REMOVE";
        console.log("Delete item from cart");
        axios.interceptors.request.use(request => {
            console.log('Starting Request', JSON.stringify(request, null, 2))
            return request;
        })
        axios.put('http://0.0.0.0:5000/user/cart', data)
            .then(
                res => {
                    this.props.onChange();
                },
                rej => {
                    console.log('Error happens when adding meal to cart.');
                }
            );
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
                                        <h3><img src={deleteIcon} alt="delete" onClick={() => {
                                            this.deleteMeal(item.meal);
                                        }}/>${item.quantity * item.meal.mealPrice}</h3></span>
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