import React, { useState } from 'react';
import '../CSS/info.css'; // Assuming the CSS is in info.css

// Importing images
import jcbImage from '../images/jcb.png'; // Adjust the path as necessary

function ButtonPage() {
  const [activeButton, setActiveButton] = useState('All Blogs'); // Default to 'All Blogs'

  // Data for categories with imported images and text
  const categories = {
    'All Blogs': [
      { image: jcbImage, text: 'Mighty Machines: Lack of machines in agriculture sector' },
      { image: jcbImage, text: 'Mighty Machines: Revolutionizing agriculture' },
      { image: jcbImage, text: 'Mighty Machines: Technology in farming' },
      
    ],
    Blogs: [
      { image: jcbImage, text: 'Blog: The future of agriculture' },
    ],
    Publication: [
      { image: jcbImage, text: 'Publication: Advances in agricultural machines' },
    ],
    News: [
      { image: jcbImage, text: 'News: Innovations in farm technology' },
    ],
    'Case Study': [
      { image: jcbImage, text: 'Case Study: Impact of machines on farming efficiency' },
    ],
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Update active button
  };

  return (
    <div className="button-page">
      <h1 className="page-heading">Categories</h1>
      <div className="button-container">
        <button
          className={`category-button ${activeButton === 'All Blogs' ? 'active' : ''}`}
          onClick={() => handleButtonClick('All Blogs')}
        >
          All
        </button>
        <button
          className={`category-button ${activeButton === 'Blogs' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Blogs')}
        >
          Blogs
        </button>
        <button
          className={`category-button ${activeButton === 'Publication' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Publication')}
        >
          Publication
        </button>
        <button
          className={`category-button ${activeButton === 'News' ? 'active' : ''}`}
          onClick={() => handleButtonClick('News')}
        >
          News
        </button>
        <button
          className={`category-button ${activeButton === 'Case Study' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Case Study')}
        >
          Case Study
        </button>
      </div>

      {/* Display filtered content */}
      <div className="content-container">
        {categories[activeButton].map((item, index) => (
          <div className="content-card" key={index} style={{ backgroundImage: `url(${item.image})` }}>
            <div className="card-overlay">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonPage;
