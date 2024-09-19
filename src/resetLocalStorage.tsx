import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResetLocalStorage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("score");
    localStorage.removeItem("finalMessage");
    localStorage.removeItem("totalQuestions");
    navigate("/");
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-900 bg-gray-100">
      <h1 className="text-xl">LocalStorage ha sido reiniciado.</h1>
    </div>
  );
};

export default ResetLocalStorage;
