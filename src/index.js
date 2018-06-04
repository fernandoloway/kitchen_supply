import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter } from "react-router-dom"; 
import ScrollToTop from 'react-router-scroll-top';
import setAuthorizationToken from './utility/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/userAuthAction';


// set global header axios : authorization = token
// dispatch set current user walaupun browser di refresh
if (localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();