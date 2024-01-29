import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import QuizPage from './QuizPage';
import Product from './Product';
import MainPage from './MainPage';

const apiUrl = "http://221.168.36.167:8080/";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/quizpage" element={<QuizPage apiUrl={apiUrl}/>}></Route> 
          <Route path="/product" element={<Product  apiUrl={apiUrl}/>}></Route>
          <Route path="/mainpage" element={<MainPage  apiUrl={apiUrl}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
