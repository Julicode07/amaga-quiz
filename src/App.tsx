import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";
import ResetLocalStorage from "./resetLocalStorage";

const MainRouter: React.FC = () => {
  return (
    <Router basename="/amaga-quiz/">
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/amaga-quiz/reset" element={<ResetLocalStorage />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
