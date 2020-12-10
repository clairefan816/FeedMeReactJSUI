import React, {Component} from 'react';
import logoFood from './023-car-3.png';
import './Header.css'
import groceryCart from './grocery.png'
import {Redirect} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToLogIn: false
        };
    }

    logout = () => {
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("loggedin");
        sessionStorage.removeItem("userType");
        this.setState({redirectToLogIn: true});
    }

    render() {
        if (this.state.redirectToLogIn) {
            return <Redirect to={"login"}/>
        } else {
            return (
                <div>
                    <div className='navbar'>
                    <span className='logo'>
                        <img className='logo_image' src={logoFood} alt="logo"/>
                        <h1>Feed Me</h1>
                    </span>
                        <span className="userCart">
                        <img className='logo_image' src={groceryCart} alt="logo"/>
                        {window.sessionStorage.getItem("userId") && window.sessionStorage.getItem("loggedin") &&
                            <p onClick={() => {
                                this.logout()
                            }}> Log out </p>
                        }
                    </span>
                    </div>

                </div>
            )
        }
    }
}

export default Header;