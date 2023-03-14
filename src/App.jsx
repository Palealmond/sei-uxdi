import './App.css';
import Header from './components/header'
import Footer from './components/footer';
import { CarSlider } from './components/carslider';
import HorizontalScrollBar from './components/horizontalScroll';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Header />
      <CarSlider />
      <HorizontalScrollBar />

      <Footer />
    </div>
  );
}

export default App;
