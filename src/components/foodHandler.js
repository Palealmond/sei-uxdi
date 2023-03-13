
import foodData from "./food.json"
import cofeeData from "./coffee.json"
import React from "react";


export function FoodHandler() {
  return (
    <div className="media-group"> 
    {
      
      foodData.map((food) => (
          <div className="media-element">
            <img src={food.img} alt="" />
            <h3>{food.productName}</h3>
            <p>{food.description}</p>
          </div>
        
      ))
    
    
      }
    </div>
  );
}

        
                
      

export function CoffeeHandler() {
  return (
    <div className="media-group"> 
    {
      cofeeData.map((coffee) => (
          <div className="media-element">
            <img src={coffee.img} alt="" />
            <h3>{coffee.productName}</h3>
            <p>{coffee.description}</p>
          </div>
        
      ))
      }
    </div>
  );
}
