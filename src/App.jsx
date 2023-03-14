import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer';
import { CarSlider } from './components/carslider';
import HorizontalScrollBar from './components/horizontalScroll';
import FullCard from './components/fullcard';


function App() {
  return (
    <div className="App">
      <Header />
      <CarSlider />
      <HorizontalScrollBar />
      <FullCard />

      <Footer />
    </div>
  );
}

export default App;
