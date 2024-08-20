import React from 'react';
import Item from './item';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
    items: Item[];
    title?: string;
}

const ItemCarousel: React.FC<CarouselProps> = ({ items, title }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
    };

    return (
        <div>
            {title && <p className='subpixel-antialiased text-dark text-3xl pl-2 pt-2 pb-3'>{title}</p>}
            <Slider {...settings}>
                {items.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </Slider>
        </div>
    );
};

export default ItemCarousel;