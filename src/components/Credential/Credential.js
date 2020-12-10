import React, {Component} from 'react';
import './Credential.css'
import axios from 'axios';
import {Redirect, useHistory} from "react-router-dom";

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
            }
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
                    <form onSubmit={this.submit}>
                        {
                            !this.state.switchToRegister &&
                            <>
                                <label htmlFor="userId">UserName: </label>
                                <input type="text" name="userId" onChange={this.handleUserIdChange}/><br/><br/>
                                <label htmlFor="password">Password: </label>
                                <input type="text" name="password" onChange={this.handlePasswordChange}/>
                                <br/>
                                <br/>
                            </>
                        }
                        {
                            this.state.switchToRegister &&
                            <>
                                <label>
                                    Choose type of user: {"  "}
                                    <select value={this.state.userType} onChange={this.handleUserTypeChange}>
                                        <option value='customer'>Customer</option>
                                        <option value='courier'>Courier</option>
                                    </select>
                                </label><br/><br/>
                            </>
                        }
                        {
                            this.state.switchToRegister && this.state.userType === 'customer' &&
                            <>
                                <label htmlFor="name">Name: </label>
                                <input type="text" name="name" onChange={this.handleNameChange}/><br/><br/>
                                <label htmlFor="email">Email: </label>
                                <input type="text" name="email" onChange={this.handleEmailChange}/><br/><br/>
                                <label htmlFor="address">Address: </label>
                                <input type="text" name="address" onChange={this.handleAddressChange}/><br/><br/>
                                <label htmlFor="password">Password: </label>
                                <input type="text" name="password" onChange={this.handlePasswordChange}/>
                                <br/>
                                <br/>
                            </>
                        }
                        {
                            this.state.switchToRegister && this.state.userType === 'courier' &&
                            <>
                                <label htmlFor="name">Name: </label>
                                <input type="text" name="name" onChange={this.handleNameChange}/><br/><br/>
                                <label htmlFor="location">Location: </label>
                                <input type="text" name="location" onChange={this.handleLocationChange}/><br/><br/>
                            </>
                        }
                        <input className="ButtonSubmit" type="submit" value="Submit"/>
                        {
                            !this.state.switchToRegister &&
                            <p className="SignUp" onClick={() => {
                                this.switchToRegister()
                            }}>Sign Up</p>
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