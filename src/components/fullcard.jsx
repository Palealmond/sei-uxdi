import React from "react";
import "./fullcontain.css"
import breakfast from "../assets/fullcard.png"

export default function FullCard() {

  return (
    <>
      <div className="fullcontainer">
        <img src={breakfast}
          style={{ width: "363px ", height: "230px" }}
          alt="breakfast"></img>
        <h4>
          Featured Breakfast Combo
        </h4>
        <p>
          Start off your morning with a delicious breakfast combo of your choice!
        </p>
          

        



    </div>
    
    
    
    </>
  );
}