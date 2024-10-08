import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
