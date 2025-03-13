import { useState } from "react";
import image1 from "../../Assets/Carousel/image1.webp";
import image2 from "../../Assets/Carousel/image2.webp";

const images = [
    image1,
    image2
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="carousel">
            <button onClick={prevImage}>&lt;</button>
            <img src={images[currentIndex]} loading="lazy" alt="" />
            <button onClick={nextImage}>&gt;</button>
        </section>
    );
};

export default Carousel;
