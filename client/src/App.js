import React from 'react'
import {Header} from './containers';
import {Navbar, Feature} from './components';
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
     
      <Feature />

        
    </div>
  )
}

export default App