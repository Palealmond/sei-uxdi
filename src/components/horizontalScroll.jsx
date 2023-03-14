import React from "react";
import "./horizontalScroll.css"
import { FoodHandler, CoffeeHandler } from "./foodHandler.js"






export default function HorizontalScrollBar () {

  return (
    <>
    <h2 className="section-title">Groups elements</h2>
<div className="media-scroller media-scroller--with-groups snaps-inline">

<div className="media-group"> 
        <CoffeeHandler /> 
  
          <FoodHandler />
        </div>
        
          </div>
        

          
          
          
      
    
    </>
  );
};