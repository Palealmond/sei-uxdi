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
    // <header className="header-header">
    <div className="header-container">
      <h1 className="header-h1">Good {timeOfDay()}</h1>
      <button className="header-button" onClick={toggleTheme}>
        {isDark ? "Light" : "Dark"}
      </button>
    </div>
    // </header>
  );
}

export default Header