import React, { Component } from 'react';
import Header from './components/Header/Header';
import OrderBuilder from './containers/OrderBuilder/OrderBuilder';
import Menu from './components/Menu/Menu'

class App extends Component {
  render (){
    return (
      <div>
        <Header />
        <Menu />
        <OrderBuilder />
      </div>
    );
  }
}

export default App;
