import React from 'react';
import ProductList from '../body-comp/ProductList';
import PromotionBanner from './promotionBanner';
import Axios from 'axios';

export default function Homepage() {

    const getAllProducts = () => {
        Axios.get("/products")
            .then((response) => {
                const data = response.data;
                console.log(data);
                console.log("Data has been retrieved");
            }).catch(() => {
                console.log("Internal server error");
            })
    }

    return (
        <div>
            <PromotionBanner />
            {getAllProducts()}
            <ProductList />
        </div>
    )
}
