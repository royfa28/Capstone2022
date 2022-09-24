import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { SliderData } from './SliderData';

import Banner1 from '../../assets/Banners/Banner1.png';

export default function ProductImageSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-banner'>
            <Carousel.Item>
                <img className="d-block w-100" src={Banner1} alt="First slide" />

                {/* No caption needed for now
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Banner1} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Banner1} alt="Third slide" />
            </Carousel.Item>

        </Carousel>
    )
}
