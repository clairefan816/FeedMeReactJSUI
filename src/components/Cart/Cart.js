import React, { Component } from 'react';
import './Cart.css'
import deleteIcon from './delete.png'
import OrderBuilder from '../../containers/OrderBuilder/OrderBuilder'


class Cart extends Component{

    constructor(props){
        super(props);
        this.state = {
            items : [
                { id: 'item_1001', name: 'Cupcake1', cost: 1, quantity: 2},
                { id: 'item_1002', name: 'Cupcake2', cost: 1, quantity: 1},
            ],
            itemsPrice: 0,
            deliveryCharges: 1,
            packaging: 1,
            totalPrice: 1
        }
    }

    render(){
        return (
            <div className="Side_cart">
                <div className="popup">
                    <div className="cart">
                        <h2>Your Cart</h2>
                        <div>
                        {this.state.items.map((item, id) => {
                                    return <div className="cart_item" key={id}>
                                        <span><h3>{item.name}({item.quantity})</h3><h3><img src={deleteIcon} alt="delete"/>${item.cost}</h3></span>
                                    </div>
                                })}
                        </div>
                        <div>
                            <div className="final_price">
                                <div className="cart_item">
                                    <h3>Items Price:</h3>
                                    <h3>${this.state.itemsPrice}</h3>
                                </div> 
                                <div className="cart_item">
                                    <h3>Delivery Charges:</h3>
                                    <h3>${this.state.deliveryCharges}</h3>
                                </div> 
                                <div className="cart_item">
                                    <h3>Packaging:</h3>
                                    <h3>${this.state.packaging}</h3>
                                </div> 
                            </div>
                            <div className="final_price">
                                <h3>Total Price:</h3>
                            <h3>${this.props.content.totalPrice}</h3>
                            </div>
                            <button className="Order_btn">Order Now</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default Cart;