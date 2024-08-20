import React from 'react';
import Item from './item';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
    items: CategoryItem[];
}

const CatetoryCarousel: React.FC<CarouselProps> = ({ items }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    return (
        <div>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </Slider>
        </div>
    );
};

export default CatetoryCarousel;