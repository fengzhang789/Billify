import React from 'react'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css'
/* import { Link } from "react-router-dom"; */
/* import {Route, Routes} from 'react-router'; */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div classname ="App">
      <div className = "gradient__bg">
        <Navbar/>
        <Header/>
      </div>
     
      <Features />

        
    </div>
  )
}

export default App