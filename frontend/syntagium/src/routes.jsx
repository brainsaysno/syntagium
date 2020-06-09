import React from 'react';
import { Route, Link } from 'react-router-dom';

import SyntagiList from './components/syntagi-list.jsx'
import SyntagiDetail from './components/syntagi-detail.jsx'

function BaseRouter() {
    return (
        <div>
            <Route exact path='/syntagi' component={SyntagiList}/>
            <Route exact path='/syntagi/:syntagiID' component={SyntagiDetail}/>
        </div>
    )
}

export default BaseRouter;