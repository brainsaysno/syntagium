import React from 'react';
import { Route, Link } from 'react-router-dom';

import SyntagiList from './components/syntagi-list.jsx'
import SyntagiDetail from './components/syntagi-detail.jsx'
import SyntagiForm from './components/syntagi-form.jsx'

function BaseRouter() {
    return (
        <div>
            <Route exact path='/syntagi' component={SyntagiList}/>
            <Route exact path='/syntagi/:id' component={SyntagiDetail}/>
            <Route exact path='/import' component={SyntagiForm}></Route>
        </div>
    )
}

export default BaseRouter;