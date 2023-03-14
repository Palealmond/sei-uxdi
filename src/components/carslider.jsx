import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './carstyles.css';
import React from 'react';
import Carousel1 from "../assets/carousel/Carousel 1.png"
import Carousel2 from "../assets/carousel/Carousel 2.png"
import Carousel3 from "../assets/carousel/Carousel 3.png"

const AutoplaySlider = withAutoplay(AwesomeSlider);

export function CarSlider() {
  return (
    <div className="carContainer">
      <AutoplaySlider mobileTouch={true}
        play={true}
        cancelOnInteraction={false}
        interval={3000}
        
       
    

      
      bullets={false}
      infinite={true}
      
        className="car-slider"
        media={
          [
            {
              source: Carousel1,
              alt: "Carousel 1"
            },
            {
              source: Carousel2,
              alt: "Carousel 2"
            },
            {
              source: Carousel3,
              alt: "Carousel 3"
            }
          ]
        }
   

      >
        
     

      </AutoplaySlider>
    
      </div>

  );
}
