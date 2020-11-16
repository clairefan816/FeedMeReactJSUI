import React, { Component } from 'react';
import './Menu.css'


class Menu extends Component {
    render(){
        return(
            <div className='menu-container'>
                <div className="list-container">
                    {this.props.menuList.items.map((item, id) => {
                        return <div className='item-container' key={id} >
                        <img src={item.src} alt={item.name} className="img" />
                        <h3>{item.name}</h3>
                        <b>${(item.cost).toFixed(2)}</b>
                        <button>Add to Cart</button>
                        </div>
                    })}
                </div>
            </div> 
        )
    }
}

export default Menu;
