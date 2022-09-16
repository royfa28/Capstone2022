import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import MyLoginContext from './context/loginContext';
import MyAccountContext from "./context/accountContext";
import MyShoppingCartContext from "./context/ShoppingCartContext";
import MyProductsContext from './context/ProductsContext';
import MyOrderContext from "./context/OrderContext";

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MyProductsContext>
            <MyShoppingCartContext>
                <MyLoginContext>
                    <MyAccountContext>
                        <MyOrderContext>
                            <App />
                        </MyOrderContext>
                    </MyAccountContext>
                </MyLoginContext>
            </MyShoppingCartContext>
        </MyProductsContext>
    </BrowserRouter>
);