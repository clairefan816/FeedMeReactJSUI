import React, {Component} from 'react';
import './Menu.css'
import PropTypes from 'prop-types';
import cupcake from '../../assets/cupcake.png'
import axios from 'axios';
import MenuBuilder from "../../containers/MenuBuilder/MenuBuilder"

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assets: {
                cupcake: cupcake
            }
        }
    }

    addToCart = (meal) => {
        let data = {};
        data['id'] = window.sessionStorage.getItem('userId');
        data['mealPrice'] = meal.mealPrice.toString();
        data['mealName'] = meal.mealName;
        data['mealId'] = meal.mealId;
        data['operation'] = "ADD";
        console.log("Add item to cart");
        axios.interceptors.request.use(request => {
            console.log('Starting Request', JSON.stringify(request, null, 2))
            return request
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


    render() {
        return (
            <div className='item-container' key={this.props.id}>
                <img src={this.state.assets[this.props.mealName]} alt={this.props.mealName} className="img"/>
                <h3>{this.props.mealName}</h3>
                <b>{(this.props.mealPrice).toFixed(2)}</b>
                <button onClick={() => {
                    this.addToCart(this.props);
                }}>Add to Cart
                </button>
            </div>
        )
    }
}

Menu.protoType = {
    mealId: PropTypes.string.isRequired,
    mealName: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    mealPrice: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Menu;
