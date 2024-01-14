import React, { useState } from 'react'
import '../assets/stylesheets/feature.css';
import Navbar from '../components/Navbar';
import SOAPAnalysis from '../components/SOAPAnalysis';

const Submit = () => {

    // pass in object with processed data for each section 

    return (
        <div>
            <div className="billify__feature-content">
            <h1 className="gradient__text">Results</h1>
            <SOAPAnalysis />
            </div>
        </div>
    )
}

export default Submit