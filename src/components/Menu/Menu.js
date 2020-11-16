import React, { Component } from 'react';
import cupcake from './cupcake.png'
import './Menu.css'


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        }
    }

    render(){
        return(
            <div className='menu-container'>
                <div className="list-container">
                    {this.state.items.map((item, id) => {
                        return <div className='item-container' key={id} >
                        <img src={item.src} alt={item.name} className="img" />
                        <h3>{item.name}</h3>
                        <b>${(item.cost).toFixed(2)}</b>
                        <button>Add to Cart</button>
                        </div>
                    })}
                </div>
            </div> 
        )
    }
}



export default Menu;
