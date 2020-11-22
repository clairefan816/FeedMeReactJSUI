import React, { Component } from 'react';
import Header from './components/Header/Header';
import OrderBuilder from './containers/OrderBuilder/OrderBuilder';
import MenuBuilder from './containers/MenuBuilder/MenuBuilder'
import Success from './components/Success/Success'
import {BrowserRouter, HashRouter, NavLink, Switch, Route} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";


class App extends Component {
  render (){
    return (
      <BrowserRouter forceRefresh={true}>
        <Header />
        <SideBar />
        <MenuBuilder />
        <Switch>
            <Route path='/home' component={OrderBuilder}/>
            <Route path='/success' component={Success} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
