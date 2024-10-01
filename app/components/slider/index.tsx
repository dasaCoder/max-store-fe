'use client';
import Slider from "react-slick";

export default function MSlider({ children, settings }: { children: React.ReactNode, settings: any }) {
    return (
        <Slider {...settings}>{children}</Slider>
    );
}