import React, {useState} from 'react';
import '../assets/stylesheets/soapanalysis.css';
import Dropbox from './Dropbox';

const SOAPAnalysis = ({text}) => {
  return (
    <>
      <div className="soap-notes">
          <p>"Summary"</p>
      </div>
      <Dropbox className= "billing" heading = 'Billing' text = '$$$$$'></Dropbox>
      <Dropbox heading = 'Drugs' text = 'Looks better'></Dropbox>
      <Dropbox heading = 'Lab Data/Test Results' text = '...'></Dropbox>
    </>
  )
}

export default SOAPAnalysis