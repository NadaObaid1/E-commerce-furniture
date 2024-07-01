import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SuggestedDecorations.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function SuggestedDecorations() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [decorationsData, setDecorationsData] = useState([]);

    useEffect(() => {
        const fetchDecorationsData = async () => {
            try {
                const response = await axios.get("https://e-commercefurniturebackend.onrender.com/SuggestedDecorations/SuggestedDecorations");
                if (response.data.message === 'success') {
                    setDecorationsData(response.data.SuggestedDecorations);
                } else {
                    console.error('Failed to fetch decorations data');
                }
            } catch (error) {
                console.error("Error fetching decorations data:", error);
            }
        };

        fetchDecorationsData();
    }, []);

    // Ensure decorationsData is correctly set and structured
    console.log(decorationsData);

    const totalSlides = decorationsData.length;

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
            <p className="DescSuggestedDecorations">
                Explore our suggested decorations
                <br />
                to inspire your space with elegance and creativity.
            </p>
            <div className="grid-container">
                {Array.isArray(decorationsData) && decorationsData.map((decoration, index) => (
                    <div key={index} className={`grid-item item${index + 1}`}>
                        <img src={decoration.image.secure_url} alt={`Decoration ${index + 1}`} className="grid-image" />
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
