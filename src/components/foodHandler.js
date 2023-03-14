
import foodData from "./food.json"
import cofeeData from "./coffee.json"
import React from "react";
import "./horizontalScroll.css";


export function FoodHandler() {
  return (
    <>
    {
      
      foodData.map((food) => (
          <div className="media-element">
            
            <img src={food.img} alt="" />
            <h3 className="fooditem">{food.productName}</h3>
            <p className="fooddescription">{food.description}</p>
          
          </div>
        
      ))
    
    
      }
    </>
  );
}

        
                
      

export function CoffeeHandler() {
  return (
   <>
    {
      cofeeData.map((coffee) => (
          <div className="media-element">
            <img src={coffee.img} alt="" />
            <h3>{coffee.productName}</h3>
            <p>{coffee.description}</p>
          </div>
        
      ))
      }
    </>
  );
}
