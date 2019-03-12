import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
  	<div>
  	    <header className="navbar-header" role="banner">
            <div className="container">
                 <i className="fa fa-btc" aria-hidden="true" id="icon" float='relative'></i>
                 <span className = 'head'>BitGo</span>
                <ul className="headings">
                    <li className='sub'><Link to="/" className="sub1">Home</Link></li>
                    <li className='sub'><Link to="/register" className="sub1">Register</Link></li>
                    <li className='sub'><Link to="/login" className="sub1">Login</Link></li>
                    <li className='sub'><Link to="/viewemails" className="sub1">View Emails</Link></li>
                </ul>
            </div>
        </header>
        <div>
          {props.children}
        </div>
    </div>
    )
}

export default Layout;
