import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router'

import { App, Dashboard, AudioListApp } from './containers'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />            
           <Route path="dashboard" component={AudioListApp} >
              
            </Route>
            
        </Route>
    </Router>
)