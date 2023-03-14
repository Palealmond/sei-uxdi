import React from "react";
import "./horizontalScroll.css"
import { FoodHandler, CoffeeHandler } from "./foodHandler.js"






export default function HorizontalScrollBar () {

  return (
    <>
    <div className="container">
      <h2 className="section-title">Featured Drinks</h2>
      <div className="media-scroller media-scroller--with-groups snaps-inline">


<div className="media-group"> 
        <CoffeeHandler /> 
  
        </div>
        
        </div>
      </div>
      
      <div className="container">
        
    
      
        <h2 className="section-title"
          
          
        >Featured Food</h2>
      <div className="media-scroller media-scroller--with-groups snaps-inline">


<div className="media-group"> 
        <FoodHandler />
  
        </div>
        
          </div>

    </div>
          
          
      
    
    </>
  );
};