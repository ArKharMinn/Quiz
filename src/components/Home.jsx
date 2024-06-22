import React, { useEffect, useState } from "react";

const Home = ({
  quiz,
  length,
  indexQuiz,
  clickEvent,
  resetBtn,
  myscoreBtn,
  score,
}) => {
  const [quizzes, setQuizzes] = useState({});
  const [chooseQuiz, setChooseQuiz] = useState([]);

  const scoreBtnHandling = () => {
    myscoreBtn();
  };
  const resetBtnHandling = () => {
    resetBtn();
  };

  useEffect(() => {
    if (quiz && quiz.length !== 0) {
      setQuizzes(quiz);
      setChooseQuiz(quiz.quiz);
    }
  }, [quiz]);
  return (
    <div>
      <div className="min-vh-100 py-3 d-flex justify-content-center row align-items-center">
        <div className="">
          <h1 className="text-center">Test your skill with quiz</h1>
          <div className={quiz ? "d-block" : "d-none"}>
            <p className="text-center my-3">
              You will get 1 point for each correct answer. At the end of the
              Quiz, your total score will be displayed.
            </p>
            <div className="text-center">
              <h4>
                Questions {indexQuiz} of {length.length}
              </h4>
            </div>
            <div className="text-center my-4 p-3 ">
              <h3 className="">{quizzes.question}</h3>
              <h5 className="">
                {chooseQuiz.map((item, index) => (
                  <a
                    href="#"
                    className="nav-link d-flex justify-content-center"
                    key={index}
                  >
                    <h5
                      className="my-4"
                      onClick={(e) =>
                        clickEvent(e.target.innerText, quizzes.correct)
                      }
                    >
                      {item}
                    </h5>
                  </a>
                ))}
              </h5>
            </div>
          </div>
          <h5 className={!quiz ? "d-block text-center my-5" : "d-none"}>
            Congratulation your score is {score}
          </h5>
          <div className="d-flex justify-content-center ">
            <button
              type="submit"
              onClick={() => resetBtnHandling()}
              className={!quiz ? "d-block btn btn-danger my-5 px-5" : "d-none"}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
