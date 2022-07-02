import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./style.css";

function Home({ setResultData, setQuestionCount }) {
  useEffect(() => {
    setResultData([]);
    setQuestionCount(1);
  }, []);

  return (
    <div>
      <h2>Quiz App</h2>
      <div
        style={{
          width: "400px",
          display: "flex",
          justifyContent: "space-between",
          margin: "0px auto",
        }}
      >
        <div className='quiz-1'>
          <Link to='/startquiz'>
            <button>Start Quiz</button>
          </Link>
        </div>
        <div className='quiz-2'>
          <Link to='/startquiz'>
            <button>Start Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
