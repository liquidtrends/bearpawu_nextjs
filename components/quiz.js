import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const Quiz = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [gameFinished, setGameFinished] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  if (quiz.length === 0) {
    return null;
  }

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
        setDisableNext(false);
        if (alertType === "success") {
          if (currentQuestion + 1 === quiz.length) {
            setGameFinished(true);
            setShowConfetti(true);
            return;
          }
          nextQuestion();
        }
      }, 2000);
    }
  }, [showAlert]);

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const submitQuiz = () => {
    setShowAlert(false);
    setDisableNext(true);
    if (selectedAnswer === null) {
      setAlertMessage("Please select an answer");
      setAlertType("error");
      setShowAlert(true);

      return;
    }

    if (!quiz[currentQuestion].Answers[selectedAnswer].Correct) {
      setAlertMessage("Incorrect answer. Try again!");
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    setAlertMessage("Correct answer");
    setAlertType("success");
    setShowAlert(true);

    if (currentQuestion + 1 === quiz.length) {
      return;
    }
  };

  const renderQuiz = () => {
    return (
      <>
        <div
          className={
            "text-white text-center transition-[padding] duration-500 ease absolute top-0 left-0 w-full h-0 overflow-hidden rounded-tl-xl rounded-tr-xl " +
            (showAlert && "h-auto py-5") +
            " " +
            (alertType === "error" ? "bg-red-500" : "") +
            " " +
            (alertType === "success" ? "bg-green-500" : "")
          }
        >
          {alertMessage}
        </div>
        <div className="">
          <span className="text-gray-300 text-2xl">
            Question {currentQuestion + 1}
          </span>
          <span className="text-gray-500">/{quiz.length}</span>
        </div>
        <hr className="my-3" />
        <div className="text-white my-5 text-2xl">
          {quiz[currentQuestion].Question}
        </div>
        <ul className="grid md-grid-cols-2 grid-cols-1 gap-5 mb-7 mt-15">
          {quiz[currentQuestion].Answers.map((answer, index) => (
            <li
              key={index}
              className={
                "text-white py-3 px-4 border-2 border-blue-500 hover:bg-blue-500 cursor-pointer flex justify-between items-center" +
                (selectedAnswer === index ? " bg-blue-500" : "")
              }
              onClick={() => setSelectedAnswer(index)}
            >
              {answer.Answer}{" "}
              {selectedAnswer === index ? (
                <div className="rounded-full w-6 h-6 flex items-center justify-center">
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-c1sh5i"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width={28}
                    height={28}
                    fill="white"
                  >

                  </svg>
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            className="bg-white text-[#155A63] px-5 py-2 rounded-full"
            onClick={submitQuiz}
            disabled={disableNext}
          >
            Submit
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="bg-[#155A63] p-6 relative z-50 rounded-xl">
      {showConfetti && <Confetti />}
      {gameFinished && (
        <div className="text-white text-center my-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Congratulations!
          </h1>
          <p>You have completed the quiz</p>
          <a href="/"><button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to BearPaw U</button></a>
        </div>
      )}
      {!gameFinished && renderQuiz()}
    </div>
  );
};

export default Quiz;
