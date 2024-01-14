import React, {useState} from 'react';
import '../assets/stylesheets/soapanalysis.css';
import Dropbox from './Dropbox';

const SOAPAnalysis = ({text}) => {
  return (
    <>
      <div className="soap-notes">
          <p>"Summary"</p>
      </div>
      <Dropbox heading = 'Billing' text = 'THIS WORKS'></Dropbox>
      <Dropbox heading = 'Drugs' text = 'THIS WORKS'></Dropbox>
      <Dropbox heading = 'Lab Data/Test Results' text = 'THIS WORKS'></Dropbox>
    </>
  )
}

export default SOAPAnalysis