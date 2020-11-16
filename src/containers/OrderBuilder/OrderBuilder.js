import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Menu from '../../components/Menu/Menu';
import Cart from '../../components/Cart/Cart';
import cupcake from '../../components/Menu/cupcake.png'

class OrderBuilder extends Component {
    constructor(props){
        super(props);
        this.state ={
            items: [
                { id: 'item_1001', name: 'Cupcake1', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1002', name: 'Cupcake2', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1003', name: 'Cupcake3', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1004', name: 'Cupcake4', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1005', name: 'Cupcake5', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1006', name: 'Cupcake6', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1007', name: 'Cupcake7', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1008', name: 'Cupcake8', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1009', name: 'Cupcake9', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1010', name: 'Cupcake10', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1011', name: 'Cupcake11', src: cupcake, cost: 1, quantity: 0},
                { id: 'item_1012', name: 'Cupcake12', src: cupcake, cost: 1, quantity: 0},
            ],
            itemsPrice: 0,
            deliveryCharges: 1,
            packaging: 1,
            totalPrice: 5
        }
    }
    

    // addItemHandler = ()

    render() {
        return (
            <Aux>
                <Cart content={this.state}/>
            </Aux>
        )
    }
}

export default OrderBuilder;