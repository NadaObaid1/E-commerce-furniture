// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css'; // قم بتغيير العنوان مكوت ال ي

export default function FAQ() {
    const faqData = [
        {
          question: "What payment methods do you accept?",
          answer: "We accept Visa, MasterCard, American Express, and PayPal."
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we ship internationally to most countries around the world."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you will receive a tracking number via email."
        },
        // Add more questions and answers as needed
      ];
      
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
