import React, { useEffect } from 'react';
import ProductList from '../body-comp/ProductList';
import PromotionBanner from './promotionBanner';
import Button from "react-bootstrap/Button";

import { useMyProductsContext } from "../../context/ProductsContext";

export default function Homepage() {

    // Use my context provider
    const { getAllProducts } = useMyProductsContext();

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
