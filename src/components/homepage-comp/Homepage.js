import React from 'react';
import ProductList from '../body-comp/ProductList';
import PromotionBanner from './promotionBanner';
import Button from "react-bootstrap/Button";

import { useMyProductsContext } from "../../context/ProductsContext";

export default function Homepage() {

    // Use my context provider
    const { getAllProducts } = useMyProductsContext();
    getAllProducts();
    return (
        <div>
            <PromotionBanner />
            <Button ></Button>
            <ProductList />
        </div>
    )
}
