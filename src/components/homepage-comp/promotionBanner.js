import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { PromotionBannerData } from './PromotionBannerData';
import './promotionBanner.css';
import { Container } from 'react-bootstrap';

function PromotionBanner() {

    const [current, setCurrent] = useState(0);
    const length = PromotionBannerData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(PromotionBannerData) || PromotionBannerData.length <= 0) {
        return null;
    }

    return (
        <>
            <Container fluid="lg" className="center">
                <section className="slider promotion-slider">
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    {PromotionBannerData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'}
                                key={index} >
                                {index === current && (
                                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                                    <img src={slide.image} alt='travel image' className="promotion-image" />
                                )}
                            </div>
                        );
                    })}
                </section>
            </Container>

        </>
    )
}


export default PromotionBanner;