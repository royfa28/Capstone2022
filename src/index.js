import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import MyLoginContext from './context/loginContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyLoginContext>
        <App />
    </MyLoginContext>

);