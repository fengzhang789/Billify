import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Features from "./components/feature/Feature";
import Header from "./containers/header/Header";

const NewApp = () => {
    return (
    <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<App/>} />
        <Route path="/header" element={<Header/>} />
        <Route path="/features" element={<Features />} />
    </Routes>
    </BrowserRouter>
    );
};

export default NewApp;