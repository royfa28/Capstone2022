import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import ProductCard from './ProductCard';

export default function ProductList() {

    let params = useParams();
    let productListText = "";
    console.log(params);

    if (params.consoleType != null) {
        productListText = "Console tpye is " + params.consoleType;
    } else { productListText = "" }

    return (
        <div className="container-lg">
            {/* {productListText} */}
            <Link to="/ProductDetails/">
                <ProductCard />
            </Link>
        </div>
    )
}