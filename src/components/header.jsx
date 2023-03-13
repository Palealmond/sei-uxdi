import React, { useEffect, useState } from "react"

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  function timeOfDay() { 
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return "morning";
    } else if (hours < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }




  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);


  useEffect(() => {
    timeOfDay();
  }, []);

  

  return (
    <header className="header">
      <div className="container">
        <button className="btn btn-dark" onClick={toggleTheme}>
          {isDark ? "Light" : "Dark"}
        </button>
        <h1>Good {timeOfDay()}!</h1>
        
        <span className="text-muted">Header</span>
      </div>
    </header>
  );
}