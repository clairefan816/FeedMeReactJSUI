import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Menu from '../../components/Menu/Menu';
import Cart from '../../components/Cart/Cart';
import cupcake from '../../assets/cupcake.png'
import PropTypes from "prop-types";
import MenuBuilder from "../MenuBuilder/MenuBuilder"
import axios from 'axios';

class OrderBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemsPrice: 0,
            deliveryCharges: 0,
            packaging: 0,
            totalPrice: 0,
            userName: ""
        }
    }

    updateCart = () => {
        axios.get(`http://0.0.0.0:5000/user/${window.sessionStorage.getItem('userId')}`)
            .then(
                res => {
                    this.extractMealsInCart(res.data);
                },
                rej => {
                    console.log('Error happens when updating cart.');
                }
            );
    }

    componentDidMount() {
        this.updateCart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.updateCart !== this.props.updateCart) {
            this.updateCart();
        }
    }

    extractMealsInCart = (data) => {
        console.log(data);
        const mealCart = data.mealCart;
        let itemsPrice = 0;
        let deliveryCharges = 0;
        let packaging = 0;
        let totalPrice = 0;
        let userName = data.name;
        let mealCount = 0;
        if (mealCart.meals) {
            this.setState({meals: mealCart.meals})
            mealCart.meals.forEach((mealQuantity) => {
                itemsPrice += mealQuantity.quantity * mealQuantity.meal.mealPrice;
                mealCount += mealQuantity.quantity;
            });
            deliveryCharges = itemsPrice * 0.05;
            packaging = mealCount * 0.5;
            totalPrice = itemsPrice + deliveryCharges + packaging;
        }
        this.setState({
            items: mealCart.meals,
            itemsPrice: itemsPrice.toFixed(2),
            deliveryCharges: deliveryCharges.toFixed(2),
            packaging: packaging.toFixed(2),
            totalPrice: totalPrice.toFixed(2),
            userName: userName
        })
    }

    render() {
        console.log("updating cart");
        return (
            <Aux>
                <Cart content={this.state}/>
            </Aux>
        )
    }
}

OrderBuilder.protoType = {
    updateCart: PropTypes.number.isRequired
}

export default OrderBuilder;