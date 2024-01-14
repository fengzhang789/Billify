import React, {useState} from 'react'
import NotePage from './pages/NotePage';
import './App.css'
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Submit from './pages/Submit';

const App = () => {
  const [soapNotes, setSoapNotes] = useState('')

  return (
    <div className ="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path="/note-input" element={<NotePage soapNotes = {soapNotes} setSoapNotes = {setSoapNotes} />} />
        <Route path="/submit" element={<Submit text = {soapNotes}/>} />
      </Routes>
    </div>
  )
}

export default App