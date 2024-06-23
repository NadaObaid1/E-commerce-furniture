import React, { useState } from 'react';
import './SuggestedDecorations.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import image1 from '../../../assests/background1.jpg';
import image2 from '../../../assests/background2.jpg';
import image3 from '../../../assests/background3.jpg';
import image4 from '../../../assests/background4.jpg';
import image5 from '../../../assests/background6.jpg';
import image6 from '../../../assests/background5.jpg';

function SuggestedDecorations() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const slides = [
        [
            { src: image1, alt: 'Image 1' },
            { src: image2, alt: 'Image 2' },
            { src: image3, alt: 'Image 3' }
        ],
        [
            { src: image4, alt: 'Image 1' },
            { src: image5, alt: 'Image 2' },
            { src: image6, alt: 'Image 3' }
        ]
    ];

    const totalSlides = slides.length;

    const goToPreviousSlide = () => {
        const newIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
        setCurrentSlideIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentSlideIndex + 1) % totalSlides;
        setCurrentSlideIndex(newIndex);
    };

    return (
        <div>
            <h2 className="titleEmployees">Suggested Decorations</h2>
            <hr className="title-hr" />
            <p className="DescSuggestedDecorations">Explore our suggested decorations<br/> to inspire your space with elegance and creativity.</p>
            <div className="grid-container">
                {slides[currentSlideIndex].map((image, index) => (
                    <div key={index} className={`grid-item item${index + 1}`}>
                        <img src={image.src} alt={image.alt} className="grid-image" />
                    </div>
                ))}
            </div>
            <div className="navigation-buttons">
                <button className="arrow-btnleft" onClick={goToPreviousSlide}><FaChevronLeft /></button>
                <button className="arrow-btnright" onClick={goToNextSlide}><FaChevronRight /></button>
            </div>
        </div>
    );
}

export default SuggestedDecorations;
