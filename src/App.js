import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import QuizPage from './QuizPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/quizpage" element={<QuizPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
