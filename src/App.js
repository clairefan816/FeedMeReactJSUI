import React, {Component} from 'react';
import Header from './components/Header/Header';
import OrderBuilder from './containers/OrderBuilder/OrderBuilder';
import Status from './components/Status/Status'
import {BrowserRouter, HashRouter, Redirect, Switch, Route} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Credential from "./components/Credential/Credential"
import Pickup from "./components/Pickup/Pickup"


class App extends Component {

    state = {
        updateCart : 0
    }

    updateCart = () => {
        this.setState({
            updateCart : 1 - this.state.updateCart
        })
    }
    render() {
        return (
            <BrowserRouter forceRefresh={true}>
                <Header/>
                <Switch>
                    <Redirect from="/" exact to="/login" />
                    <Route path='/login' component={Credential} />
                    <Route path='/home' render={() => {
                        if (window.sessionStorage.getItem("userType") === "customer") {
                            return <>
                                <SideBar onChange={this.updateCart}/>
                                <OrderBuilder onChange={this.updateCart} updateCart={this.state.updateCart}/>}
                            </>
                        } else if (window.sessionStorage.getItem("userType") === "courier") {
                            return <Pickup/>
                        }
                    }}/>
                    <Route path='/status' render={(props) => <Status {...props}/>}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
