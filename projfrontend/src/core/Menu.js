 import React from 'react';
 import {Link, withRouter} from "react-router-dom"

const currentTab = (history, path) => {
    if(history.location.pathname===path){
        return { color: "rgb(199, 211, 235)"}
    }else{
        return {color: "black"}
    }
}

const Menu = ({history}) => (
    <div>
        <ul className= "nav nav-pills" style={{backgroundColor: "white"}}>
            <li className="nav-item">
                <Link className="nav-link" style={currentTab(history, "/")} to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={currentTab(history, "/cart")} to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={currentTab(history, "/user/dashboard")} to="/user/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={currentTab(history, "/admin/dashboard")} to="/admin/dashboard"> Admin Dashboard</Link>
            </li>     
            <li className="nav-item">
                <Link className="nav-link" style={currentTab(history, "/signup")} to="/signup"> Signup</Link>
            </li>     
            <li className="nav-item">
                <Link className="nav-link" style={currentTab(history, "/signin")} to="/signin"> Signin</Link>
            </li>     
            <li className="nav-item">
                <Link className="nav-link" style={currentTab(history, "/signout")} to="/signout"> Signout</Link>
            </li>     
        </ul>
    </div>
)

export default  withRouter(Menu);