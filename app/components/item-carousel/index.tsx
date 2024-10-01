import React from 'react';
import Item from './item';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MSlider from '../slider';

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
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
        <div>
            {title && <p className='subpixel-antialiased text-dark text-3xl pl-2 pt-2 pb-3'>{title}</p>}
            <MSlider settings={settings}>
                {items.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </MSlider>
        </div>
    );
};

export default ItemCarousel;