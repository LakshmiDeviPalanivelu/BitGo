import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
    <section id="registration" className="container">
        <form className="center" id='form'>
            <fieldset>
                <h3>Personal information</h3>
                <div className="form-group">
                    <input type="text" placeholder="Firstname*" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Lastname" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="tel" placeholder="Contact number*" className="form-control" />
                </div>
                <hr />
                <h3>Login information</h3>
                <div className="form-group">
                    <input type="text" placeholder="E-mail*" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password*" className="form-control" />
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Confirm Password*" class="form-control" />
                </div>
                <div className="form-group">                    
                    <button className='btn2'>Register</button>
                </div>
            </fieldset>
        </form>
    </section>
    );
  }
}

export default Register;
