import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import QuizPage from './QuizPage';
import Product from './Product';
import MainPage from './MainPage';
import SearchList from './SearchList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/quizpage" element={<QuizPage />}></Route> 
          <Route path="/product" element={<Product />}></Route>
          <Route path="/mainpage" element={<MainPage />}></Route>
          <Route path="/searchlist" element={<SearchList />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
