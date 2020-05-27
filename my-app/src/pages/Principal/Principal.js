import React, { Component, useState, useEffect } from 'react';
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js'; 
function getWindowdimension() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {
    width, 
    height
  };
}
const Principal = () => {
 const [Windowdimension, setWindowdimension] = useState (
    getWindowdimension ()
 );
useEffect ( 
  ()=> {
    function handleSize () {
      setWindowdimension (getWindowdimension())
    }
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []
); 
return (
<div className="App">
      {Windowdimension.width > 850 && <Header />}
      <Body />
      <Footer />
    </div> 
    )
};
export default Principal;
