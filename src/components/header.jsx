import React, { useEffect, useState } from "react"



const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  function timeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return "Morning";
    } else if (hours < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }




  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);


  useEffect(() => {
    timeOfDay();
  }, []);



  return (
    <header className="header-header">
      <div className="header-container">
        <button className="header-button" onClick={toggleTheme}>
          {isDark ? "Light" : "Dark"}
        </button>
        <h1>Good {timeOfDay()}!</h1>
      </div>
    </header>
  );
}

export default Header