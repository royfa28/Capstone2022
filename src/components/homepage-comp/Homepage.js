import React from 'react';
import ProductList from '../body-comp/ProductList';
import PromotionBanner from './promotionBanner';

export default function Homepage() {
    return (
        <div>
            <PromotionBanner />
            
            <ProductList />
        </div>
    )
}
