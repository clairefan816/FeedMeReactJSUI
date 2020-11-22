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
                { id: 'item_1002', name: 'Cupcake2', src: cupcake, cost: 1, quantity: 3},
                { id: 'item_1003', name: 'Cupcake3', src: cupcake, cost: 1, quantity: 4},
                { id: 'item_1004', name: 'Cupcake4', src: cupcake, cost: 1, quantity: 2},
            ],
            itemsPrice: 10,
            deliveryCharges: 7,
            packaging: 3,
            totalPrice: 5,
            userName: "None"
        }


    }

    render() {
        return (
            <Aux>
                <Cart content={this.state}/>
            </Aux>
        )
    }

    componentDidMount() {

        fetch('http://localhost:5000/user/5fba12c5e77994431594fd9a')
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                let name = result.name;
                this.setState(
                    {userName: name}
                );
            })
            .catch((error) => { console.log(error.message)})
    }
}

export default OrderBuilder;