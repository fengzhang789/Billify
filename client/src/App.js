import React from 'react'
import NotePage from './pages/NotePage';
import './App.css'
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Submit from './pages/Submit';

const App = () => {
  return (
    <div classname ="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path="/note-input" element={<NotePage />} />
        <Route path="/submit" element={<Submit/>} />
      </Routes>
    </div>
  )
}

export default App