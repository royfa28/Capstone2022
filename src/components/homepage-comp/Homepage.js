/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import ProductList from '../body-comp/ProductList';
import PromotionBanner from './promotionBanner';

import { useMyProductsContext } from "../../context/ProductsContext";

// The homepage
export default function Homepage() {

    // Use my context provider
    const { getAllProducts } = useMyProductsContext();

    // Get all the products from Database to be use
    useEffect(() => {
        getAllProducts();
        const interval = setInterval(() => {
            getAllProducts();
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <PromotionBanner />
            <ProductList />
        </div>
    )

}
