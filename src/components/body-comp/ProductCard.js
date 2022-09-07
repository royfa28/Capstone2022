import React from 'react'
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Spiderman from '../../assets/Product Image/Spiderman.jpg';
import ProductData from "../../local-database/allProducts.json";
import "./ProductCard.css";

export default function ProductCard() {

    const quantity = 1;
    
    // console.log(ProductData);

    return (
        <Row xs={1} md={4} xl={6} lg={5} className="g-4">
            {ProductData.map((data, key) => {
                return (
                    <Col>
                        <Card className="Product-Card h-100">

                            <Link to={"/ProductDetails/" + data.productID} >
                                {/* Game picture */}
                                <Card.Img variant="top" src={Spiderman} />

                                <Card.Body>
                                    <Card.Title className="align-items-baseline">
                                        <p>{data.productTitle}</p>
                                        <p className="text-muted">{data.productPrice}</p>
                                    </Card.Title>
                                </Card.Body>
                            </Link>

                            <Card.Footer className="mt-auto" style={{ padding: "0px" }}>
                                {quantity === 0 ? (
                                    <Button className="w-100">Add to cart</Button>
                                ) :
                                    <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                            <Button size="sm"> - </Button>
                                            <div> <span className="fs-5">{quantity}</span> in cart</div>
                                            <Button size="sm"> + </Button>
                                        </div>

                                        <Button variant="danger" size="sm"> Remove </Button>
                                    </div>}
                            </Card.Footer>

                        </Card>
                    </Col>
                )
            })}

        </Row >
    )
}


// {
//     Array.from({ length: 8 }).map((_, idx) => (
//         <Col>
//             <Card className="Product-Card h-100">

//                 <Link to="/ProductDetails/:productID">
//                     {/* Game picture */}
//                     <Card.Img variant="top" src={Spiderman} />

//                     <Card.Body>
//                         <Card.Title className="align-items-baseline">
//                             <p>Product name</p>
//                             <p className="text-muted">$10.00</p>
//                         </Card.Title>
//                     </Card.Body>
//                 </Link>

//                 <Card.Footer className="mt-auto" style={{ padding: "0px" }}>
//                     {quantity === 0 ? (
//                         <Button className="w-100">Add to cart</Button>
//                     ) :
//                         <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
//                             <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
//                                 <Button size="sm"> - </Button>
//                                 <div> <span className="fs-5">{quantity}</span> in cart</div>
//                                 <Button size="sm"> + </Button>
//                             </div>

//                             <Button variant="danger" size="sm"> Remove </Button>
//                         </div>}
//                 </Card.Footer>

//             </Card>
//         </Col>
//     ))
// }