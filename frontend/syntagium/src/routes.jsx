import React from 'react';
import { Route, Link } from 'react-router-dom';

import SyntagiList from './components/syntagi-list.jsx'

function BaseRouter() {
    return (
        <div>
            <Route exact path='/syntagi' component={SyntagiList}/>
            <Route exact path='/syntagi/:articleID' component={SyntagiList}/>
        </div>
    )
}

export default BaseRouter;