import { useState, useEffect } from "react";
import { quizData, Question } from "@/lib/data";
import ParticlesDemo from "./Particles";
import MarqueeDemo from "./Slider";
import ConfettiFireworks from "./ConfettiFireworks";

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string>("");
  const [isConfettiVisible, setIsConfettiVisible] = useState<boolean>(false);
  const totalQuestions = 8;

  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    const savedMessage = localStorage.getItem("finalMessage");
    const savedQuestions = localStorage.getItem("totalQuestions");

    if (savedScore && savedQuestions) {
      setScore(Number(savedScore));
      setFinalMessage(savedMessage || "");
      setShowScore(true);
      if (Number(savedScore) >= 6) {
        setIsConfettiVisible(true);
      }
    } else {
      const shuffledQuestions = quizData.sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffledQuestions.slice(0, totalQuestions);
      setQuestions(selectedQuestions);
      localStorage.setItem("totalQuestions", String(totalQuestions));
    }
  }, []);

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
      const finalScore =
        score + (selectedAnswer === questions[currentQuestion].answer ? 1 : 0);
      const message = finalScore >= 6 ? "¡Felicidades!" : "¡A la próxima!";
      setFinalMessage(message);
      localStorage.setItem("score", String(finalScore));
      localStorage.setItem("finalMessage", message);
      if (finalScore >= 6) {
        setIsConfettiVisible(true);
      }
    }
  };

  if (questions.length === 0 && !showScore) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-900 bg-gray-100">
        Cargando...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center w-full">
      <ParticlesDemo />
      <MarqueeDemo />
      {isConfettiVisible && <ConfettiFireworks shouldFire={true} />}
      <div className="flex flex-col items-center justify-center w-full p-4 sm:p-6 lg:p-8">
        {showScore ? (
          <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">
              {finalMessage}
            </h1>
            <p className="text-6xl font-bold text-gray-300">
              {score + 1} de {totalQuestions} {/* Usar totalQuestions aquí */}
            </p>
          </div>
        ) : (
          <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">
              Pregunta {currentQuestion + 1} de {questions.length}
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              {questions[currentQuestion].question}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`py-3 px-4 rounded-lg text-left transition-all ${
                    selectedAnswer === option
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
                className={`py-2 px-6 bg-green-600 text-white rounded-lg ${
                  !selectedAnswer ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Siguiente Pregunta
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
