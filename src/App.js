import React, { Component } from 'react';
import Header from './components/Header/Header';
import OrderBuilder from './containers/OrderBuilder/OrderBuilder';
import MenuBuilder from './containers/MenuBuilder/MenuBuilder'

class App extends Component {
  render (){
    return (
      <div>
        <Header />
        <MenuBuilder />
        <OrderBuilder />
      </div>
    );
  }
}

export default App;
