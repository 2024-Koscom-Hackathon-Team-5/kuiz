import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Home";
import MainPage from './MainPage';
import Product from './Product';
import QuizPage from './QuizPage';
import React from "react";

 const apiUrl = "http://221.168.36.167:8080/";
//const apiUrl = "http://localhost:8080/";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/quizpage" element={<QuizPage apiUrl={apiUrl} />}></Route>
          <Route path="/product" element={<Product apiUrl={apiUrl} />}></Route>
          <Route path="/mainpage" element={<MainPage apiUrl={apiUrl} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
