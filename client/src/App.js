import React from 'react'
import InputPage from './pages/InputPage';
import {Feature} from './components';
import './App.css'
/* import { Link } from "react-router-dom"; */
/* import {Route, Routes} from 'react-router'; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div classname ="App">
        <BrowserRouter>
          <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path="/input" element={<InputPage/>} />
          <Route path="/features" element={<Feature/>} />
      </Routes>
      </BrowserRouter>
      
     
        
    </div>
  )
}

export default App