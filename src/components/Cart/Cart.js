import React, { Component } from 'react';
import './Cart.css'
import deleteIcon from './delete.png'



class Cart extends Component{

    render(){
        return (
            <div className="Side_cart">
                <div className="popup">
                    <div className="cart">
                        <h2>Your Cart</h2>
                        <div>
                        {this.props.content.items.map((item, id) => {
                                    return <div className="cart_item" key={id}>
                                        <span><h3>{item.name}({item.quantity})</h3><h3><img src={deleteIcon} alt="delete"/>${item.cost}</h3></span>
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
                            <button className="Order_btn">Order Now</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default Cart;