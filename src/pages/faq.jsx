import React, { useState } from 'react';
import '../CSS/faq.css';

const faqData = [
  { question: 'What is your return policy?', answer: 'We offer a 30-day return policy on all items.' },
  { question: 'How do I track my order?', answer: 'You can track your order through the order tracking page.' },
  { question: 'Do you ship internationally?', answer: 'Yes, we offer worldwide shipping.' },
  { question: 'Can I cancel my order?', answer: 'Orders can be canceled within 24 hours of purchase.' },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Keep first question open by default

  const handleQuestionClick = (index) => {
    // Keep first question always open, toggle others
    setOpenIndex(index === openIndex ? -1 : index); // Toggle open/close of the question
  };

  return (
    <div className="faq-page">
      <h1 className="faq-heading">FAQ's</h1>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="question" onClick={() => handleQuestionClick(index)}>
              <h3>{item.question}</h3>
              <div className="faq-button-container">
                <div className={`faq-button ${openIndex === index ? 'active' : ''}`}>
                  {openIndex === index ? '-' : '+'}
                </div>
              </div>
            </div>
            {openIndex === index && (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
