import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import './MenuBuilder.css'
import Menu from '../../components/Menu/Menu';
import Cart from '../../components/Cart/Cart';
import cupcake from '../../assets/cupcake.png'
import PropTypes from 'prop-types';
import SideBar from "../../components/SideBar/SideBar"

class MenuBuilder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='menu-container'>
                <div className="list-container">
                    {this.props.menu.map((meal) => {
                        return <Menu mealId={meal.mealId} mealName={meal.mealName}
                                     mealPrice={meal.mealPrice} key={meal.mealId}
                                     onChange = {this.props.onChange}
                        />
                    })}
                </div>
            </div>
        )
    }
}

MenuBuilder.protoType = {
    menu: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MenuBuilder;