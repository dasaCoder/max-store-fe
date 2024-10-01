import React from 'react';
import Item from './item';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MSlider from '../slider';

interface CarouselProps {
    items: CategoryItem[];
}

export default async function CategoryCarousel({ items }: CarouselProps) {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <MSlider settings={settings}>
            {items.map((item, index) => (
                <Item key={index} {...item} />
            ))}
        </MSlider>
    );
}