import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



import { BrowserRouter } from "react-router-dom"; // tambahan untuk router DOM
import ScrollToTop from 'react-router-scroll-top'

ReactDOM.render(
    <BrowserRouter> 
    <ScrollToTop>
    <App />
    </ScrollToTop>
    </BrowserRouter>, 
document.getElementById('root'));

registerServiceWorker();