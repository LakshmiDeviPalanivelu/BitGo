import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './containers/HomePage/Home';
import RegisterPage from './containers/RegisterPage/Register';
import LoginPage from './containers/LoginPage/Login';
import ViewEmailsPage from './containers/ViewEmailsPage/ViewEmails';
import Layout from './hoc/layout';

const Routes = () => {
	return (		
		  <BrowserRouter>
		    <Layout>
		      <Route exact path="/" component={HomePage} />
		      <Route exact path="/register" component={RegisterPage} />
		      <Route exact path="/login" component={LoginPage} />
		      <Route exact path="/viewemails" component={ViewEmailsPage} />
		    </Layout>  
		  </BrowserRouter> 		   
		)
}

export default Routes;