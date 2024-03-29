import React from 'react';
import bill from '../assets/img/bill.png';
import '../assets/stylesheets/hero.css';
import { Link } from 'react-router-dom';



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

const InputPage = () => (
  <div className="billify__header section__padding" id="home">
    <div className="billify__header-content">
      <h1 className="gradient__text">Revolutionize Doctor's Workflow by Automating Codes</h1>
      <p>Billify streamlines medical billing by converting SOAP notes into billing records, providing doctors with efficient coding and bill generation capabilities.</p>

      <div className="billify__header-content__input">
        <Link to="/note-input"><button type="button">Get Started</button></Link>
      </div>

      <Bubbles /> {/* Insert Bubbles component here */}
    </div>

    <div className="billify__header-image">
      <img src={bill} />
    </div>
    
  </div>
);

export default InputPage;