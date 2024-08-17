import React from 'react';
import Item from './item';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
    items: Item[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
      };

    return (
        <Slider {...settings}>
            {items.map((item, index) => (
                <Item key={index} {...item} />
            ))}
        </Slider>
    );
};

export default Carousel;