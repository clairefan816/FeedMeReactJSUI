import React, {Component} from 'react'
import HappyLemo from './HL.png'
import KFC from './KFC.png'
import PandaExpress from './PE.png'
import "./SideBar.css"
import {NavLink} from "react-router-dom";


class SideBar extends Component{
    render() {
        return (
            <div className="SideBar">
                <span className="rest">
                    <img className ='logo_image' src={HappyLemo} alt="logo" />
                    <NavLink className="restName" to='/home'>HappyLemo</NavLink>
                </span>
                <span className="rest">
                    <img className ='logo_image' src={KFC} alt="logo" />
                    <NavLink className="restName" to='/home'>KFC</NavLink>
                </span>
                <span className="rest">
                    <img className ='logo_image' src={PandaExpress} alt="logo" />
                    <NavLink className="restName" to='/home'>PandaExpress</NavLink>
                </span>

            </div>
        )
    }
}

export default SideBar;