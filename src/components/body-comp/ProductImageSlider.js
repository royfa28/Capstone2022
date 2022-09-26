/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { SliderData } from './SliderData';
import "./ProductImageSlider.css"

export default function ProductImageSlider() {

    // This is just templates to make the image slider on the homepage
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'}
                        key={index} >
                        {index === current && (
                            <img src={slide.image} alt='travel image' className="image" />
                        )}
                    </div>
                );
            })}
        </section>
    )
}
