import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
    	<section id="Login" className="container">       
            <form className="center" role="form">
                <fieldset className="registration-form col-lg-6"> 
                    <h3>Login</h3>                   
                    <div className="form-group">
                        <input type="text" id="email" placeholder="E-mail*" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" placeholder="Password*" className="form-control" />
                    </div>                    
                    <div className="form-group">
                      <button className="btn2">Login</button>
                    </div>
                </fieldset>
            </form> 
        </section>
    );
  }
}

export default Login;
