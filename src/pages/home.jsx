// Home.js
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import slider1 from '../images/slider88.jpg';
import slider2 from '../images/slider77.avif';
import slider3 from '../images/slider44.jpg';
import '../CSS/home.css';
import { Paper } from '@mui/material';
import Header from './header';

function Home() {
  const items = [
    { image: slider1, alt: 'Slider Image 1' },
    { image: slider2, alt: 'Slider Image 2' },
    { image: slider3, alt: 'Slider Image 3' },
  ];

  return (
    <div className="home">
      <Header /> {/* Overlayed header */}
      <Carousel
        interval={3000}
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={true}
        style={{ height: '100%', width: '100%' }}
      >
        {items.map((item, index) => (
          <Paper key={index} className="carousel-item" elevation={0}>
            <img src={item.image} alt={item.alt} className="carousel-image" />
          </Paper>
        ))}
      </Carousel>
      <h1 className="topic">
        Elevating  Excellence <br />Together
      </h1>
    </div>
  );
}

export default Home;
