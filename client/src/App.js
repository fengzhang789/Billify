import React from 'react'
import InputPage from './pages/InputPage';
import Feature from './components/Feature';
import './App.css'
/* import { Link } from "react-router-dom"; */
/* import {Route, Routes} from 'react-router'; */
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div classname ="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path="/input" element={<InputPage/>} />
        <Route path="/features" element={<Feature/>} />
      </Routes>
    </div>
  )
}

export default App