import React from 'react'
import './feature.css';
import Navbar from '../navbar/Navbar';
import { Header } from '../../containers';



const Feature = () => {
  return (
    <div>
      <div className="gradient__bg">
         <Navbar/>
        <div className="billify__feature section__padding" id="home">
        <div className="billify__feature-content">
          <h1 className="gradient__text">Input SOAP Notes</h1>
          </div>
          </div>
      </div>
       

    <Bubbles /> {/* Insert Bubbles component here */}

    </div>
  )
}
const Bubbles = () => {
  const getRandomSize = () => {
    // Sizes range from 20px to 300px
    return 20 + Math.random() * 150;
  };

  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => {
        const size = getRandomSize();
        const style = {
          width: `${size}px`,
          height: `${size}px`,
        };

        return <div key={index} className={`gradient-bubble bubble-${index}`} style={style} />;
      })}
    </>
  );
};




export default Feature