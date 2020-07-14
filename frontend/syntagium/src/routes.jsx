import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './components/landing-page.jsx';
import SyntagiList from './components/syntagi-list.jsx';
import SyntagiDetail from './components/syntagi-detail.jsx';
import SyntagiForm from './components/syntagi-form.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Logout from './components/logout.jsx';
import TermsOfService from './components/policy.jsx';
import Spinner from './components/spinner.jsx';

function BaseRouter(props) {
    return (
        <div>
            <Route exact path='/' component={() => <LandingPage {...props}/>}/>
            <Route exact path='/syntagi' component={() => <SyntagiList {...props}/>}/>
            <Route exact path='/syntagi/:id' component={SyntagiDetail} />
            <Route exact path='/import' component={() => <SyntagiForm {...props}/>}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/logout' component={Logout}/>
            <Route exact path='/policy' component={TermsOfService}/>
            <Route exact path='/test' component={() => <Spinner messages={["pepe pepe pepe pepe", "bananas necias", "increible amigo"]}/>}></Route>
        </div>
    )
}

export default BaseRouter;