import React from 'react';

import bill from '../../assets/bill.png';
import './header.css';


const Header = () => (
  <div className="billify__header section__padding" id="home">
    <div className="billify__header-content">
      <h1 className="gradient__text">Revolutionize Doctor's Workflow by Automating Codes</h1>
      <p>Billify streamlines medical billing by converting SOAP notes into billing records, providing doctors with efficient coding and bill generation capabilities.</p>

      <div className="billify__header-content__input">
        
        <button type="button">Get Started</button>
      </div>


    </div>

    <div className="billify__header-image">
      <img src={bill} />
    </div>
    
  </div>
);

export default Header;