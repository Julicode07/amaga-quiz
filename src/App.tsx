import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";
import ResetLocalStorage from "./resetLocalStorage";

const MainRouter: React.FC = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="reset" element={<ResetLocalStorage />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
