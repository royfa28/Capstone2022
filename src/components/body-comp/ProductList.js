import React from 'react';
import { useParams } from "react-router-dom";

import ProductCard from './ProductCard';

// This template is for the homepage, where all the products will be listed
export default function ProductList() {

    let params = useParams();
    let productListText = "";
    // console.log(params);

    // The idea is to make a filter by console function, which will not be implemented as for now
    if (params.consoleType != null) {
        productListText = "Console tpye is " + params.consoleType;
    } else { productListText = "" }

    return (
        <div className="container-lg">
            {/* This is filter for the console type */}
            {productListText}

            <ProductCard />
        </div>
    )
}