import React, {Component} from 'react';
import './Credential.css'
import axios from 'axios';
import {Redirect, useHistory} from "react-router-dom";
import CUSTOMER from "./customer.png"


class Credential extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userType: "customer",
            switchToRegister: false,
            showError: false,
            userId: '',
            name: '',
            email: '',
            address: '',
            phone: '',
            password: '',
            location: ''
        };
    }



    switchToRegister = () => {
        this.setState({switchToRegister: true})
    }

    handleUserTypeChange = (event) => {
        this.setState({userType: event.target.value});
    }

    handleUserIdChange = (event) => {
        this.setState({userId: event.target.value});
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handleAddressChange = (event) => {
        this.setState({address: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handlePhoneChange = (event) => {
        this.setState({phone: event.target.value});
    }

    handleLocationChange = (event) => {
        this.setState({location: event.target.value});
    }

    loggedInPostAction = (data) => {
        window.sessionStorage.setItem('userId', data.id);
        window.sessionStorage.setItem('userType', this.state.userType);
        window.sessionStorage.setItem('loggedin', 'true');
        this.props.history.push('/home');
    }




    submit = (event) => {
        if (this.state.switchToRegister) {
            if (this.state.userType === 'customer') {
                const customerInfo = {
                    name: this.state.name,
                    email: this.state.email,
                    address: this.state.address,
                    password: this.state.password,
                    location: this.state.location,
                }
                axios.post('http://0.0.0.0:5000/user', {...customerInfo})
                    .then(
                        res => {
                            console.log(res.data);
                            this.loggedInPostAction(res.data);
                        },
                        rej => {
                            console.log('Error happens when registering user');
                        }
                    );
            } else if (this.state.userType === 'courier') {
                const courierInfo = {
                    name: this.state.name,
                    location: this.state.location,
                }
                axios.post('http://0.0.0.0:5000/courier', {...courierInfo})
                    .then(
                        res => {
                            this.loggedInPostAction(res.data);
                        },
                        rej => {
                            console.log('Error happens when registering user');
                        }
                    );
            } else if (this.state.userType === 'restaurant') {
                const restaurantInfo = {
                    name: this.state.name,
                    phone: this.state.phone,
                    address: this.state.address,
                }
                // axios.interceptors.request.use(request => {
                //     console.log('Starting Request', JSON.stringify(request, null, 2))
                //     return request;
                // })
                axios.post('http://0.0.0.0:5000/restaurant', {...restaurantInfo})
                    .then(
                        res => {
                            this.loggedInPostAction(res.data);
                        },
                        rej => {
                            console.log('Error happens when registering user');
                        }
                    );}
            } else {
                axios.get(`http://0.0.0.0:5000/user/${this.state.userId}`)
                    .then(
                        res => {
                            if (res.data.password === this.state.password) {
                                this.loggedInPostAction(res.data);
                            } else {
                                this.setState({showError: true});
                            }

                        },
                        rej => {
                            this.setState({showError: true});
                        }
                    );
            }
            event.preventDefault();
        }

    render() {
        if (window.sessionStorage.getItem("loggedin") === 'true' && window.sessionStorage.getItem("userId")) {
            return <Redirect to="/home"/>
        } else {
            return (
                <div className="Login">
                    {/*<h2>Log In</h2>*/}
                    <form onSubmit={this.submit}>
                        {
                            !this.state.switchToRegister &&
                            <>
                                <h2>Log In</h2>
                                <label  htmlFor="userId"><i className="material-icons">person</i>&nbsp;</label>
                                <input className="form-input" type="text" name="userId" placeholder="Username" onChange={this.handleUserIdChange}/><br/><br/>
                                <label htmlFor="password"><i className="material-icons">lock</i>&nbsp;</label>
                                <input className="form-input" type="text" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                                <br/>
                                <br/>
                            </>
                        }
                        {
                            this.state.switchToRegister &&
                            <>
                                <div >
                                    <h2>Register</h2>
                                    <label>
                                        Choose type of user: {"  "}

                                        <select className="icons" value={this.state.userType} onChange={this.handleUserTypeChange}>
                                            <option value='customer'>Customer</option>
                                            <option value='restaurant'>Restaurant</option>
                                            <option value='courier'>Courier</option>
                                        </select>

                                </label>
                            </div>
                                <br/><br/>
                            </>
                        }
                        {
                            this.state.switchToRegister && this.state.userType === 'customer' &&
                            <>
                                <label htmlFor="name"><i className="material-icons">person</i>&nbsp;</label>
                                <input className="form-input" type="text" placeholder="Username" name="name" onChange={this.handleNameChange}/><br/><br/>
                                <label htmlFor="email"><i className="material-icons">email</i>&nbsp;</label>
                                <input className="form-input" type="text" placeholder="email" name="email" onChange={this.handleEmailChange}/><br/><br/>
                                <label htmlFor="address"><i className="material-icons">house</i>&nbsp;</label>
                                <input className="form-input" type="text" placeholder="address" name="address" onChange={this.handleAddressChange}/><br/><br/>
                                <label htmlFor="password"><i className="material-icons">lock</i>&nbsp;</label>
                                <input className="form-input" type="text" placeholder="Password" name="password" onChange={this.handlePasswordChange}/>
                                <br/>
                                <br/>
                            </>
                        }
                        {
                            this.state.switchToRegister && this.state.userType === 'courier' &&
                            <>
                                <label htmlFor="name"><i className="material-icons">person</i>&nbsp;</label>
                                <input className="form-input" type="text" placeholder="Username" name="name" onChange={this.handleNameChange}/><br/><br/>
                                <label htmlFor="location"><i className="material-icons">location_on</i>&nbsp;</label>
                                <input className="form-input" type="text" placeholder="Location" name="location" onChange={this.handleLocationChange}/><br/><br/>
                            </>
                        }
                        {
                            this.state.switchToRegister && this.state.userType === 'restaurant' &&
                            <>
                                <label htmlFor="name"><i className="material-icons">person</i>&nbsp;</label>
                                <input className="form-input" type="text" placeholder="Username" name="name" onChange={this.handleNameChange}/><br/><br/>
                                <label htmlFor="phone"><i className="material-icons">phone</i>&nbsp;</label>
                                <input className="form-input" type="text" placeholder="PhoneNo." name="phone" onChange={this.handlePhoneChange}/><br/><br/>
                                <label htmlFor="address"><i className="material-icons">location_on</i>&nbsp;</label>
                                <input className="form-input" type="text" placeholder="address" name="address" onChange={this.handleAddressChange}/><br/><br/>
                            </>
                        }
                        <div>
                            <input className="ButtonSubmit" type="submit" value="Submit"/>
                        </div>

                        {
                            !this.state.switchToRegister &&
                            <p className="SignUp" onClick={() => {
                                this.switchToRegister()
                            }}>Don't have an account? Register Here</p>
                        }
                        {
                            this.state.showError &&
                            <p className="Error">Credential is not correct.</p>
                        }
                    </form>
                </div>
            )
        }
    }
}

export default Credential;