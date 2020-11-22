import React, { Component } from 'react';
import logoFood from './023-car-3.png';
import './Header.css'
import groceryCart from './grocery.png'

class Header extends Component {
    render(){
        return(
            <div>
                <div className='navbar'>
                    <span className='logo'>
                        <img className ='logo_image' src={logoFood} alt="logo" />
                        <h1>Feed Me</h1>
                    </span>
                    <span className="userCart">
                        <img className = 'logo_image' src={groceryCart} alt="logo" />
                    </span>
                </div>

            </div>   
        )
    }
}

export default Header;