import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Generated Random Number between two number's
const getRamdomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval;

function StartQuiz({
  resultData,
  setResultData,
  questionCount,
  setQuestionCount,
}) {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [operator, setOperator] = useState("+");
  const [addAnswer, setAddAnswer] = useState("");
  const [myScore, setMyScore] = useState(0);
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    setNumOne(getRamdomNumber(1, 9));
    setNumTwo(getRamdomNumber(1, 9));
  }, []);

  useEffect(() => {
    let answer;
    operator === "/"
      ? (answer = numOne / numTwo)
      : operator === "*"
      ? (answer = numOne * numTwo)
      : operator === "-"
      ? (answer = numOne - numTwo)
      : (answer = numOne + numTwo);
    console.log("234", answer, numOne, numTwo);
    setCorrectAnswer(answer);
  }, [operator, numOne, numTwo]);

  const startTimer = () => {
    interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    let timeOut = setTimeout(() => {
      if (questionCount <= 20) {
        setResultData((prev) => [
          ...prev,
          {
            [`Q${questionCount}`]: questionCount,
            "Correct-Answer": correctAnswer,
            "Your-Answer":
              Number(addAnswer) === 0 ? "No Answer" : Number(addAnswer),
            correct: correctAnswer === Number(addAnswer) ? true : false,
            score: 0,
          },
        ]);
        setQuestionCount((prev) => prev + 1);
        setAddAnswer("");
        setNumOne(getRamdomNumber(1, 9));
        setNumTwo(getRamdomNumber(1, 9));
        clearInterval(interval);
        setTimer(1);
        startTimer();
        setOperator("+");
      }
    }, 20000);
    return () => {
      clearTimeout(timeOut);
      clearInterval(interval);
    };
  }, [resultData]);

  const goToNext = () => {
    if (questionCount <= 20) {
      setResultData((prev) => [
        ...prev,
        {
          [`Q${questionCount}`]: questionCount,
          "Correct-Answer": correctAnswer,
          "Your-Answer":
            Number(addAnswer) === 0 ? "No Answer" : Number(addAnswer),
          correct: correctAnswer === Number(addAnswer) ? true : false,
          score: 0,
        },
      ]);
      setQuestionCount((prev) => prev + 1);
      setAddAnswer("");
      clearInterval(interval);
      setTimer(1);
      startTimer();
      setOperator("+");
      setNumOne(getRamdomNumber(1, 9));
      setNumTwo(getRamdomNumber(1, 9));
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "2rem auto",
        backgroundColor: "#b9afaf",
        padding: "1rem 0.5rem 1rem 0.5rem",
      }}
    >
      {console.log("111", myScore)}
      <h2>Start Quiz</h2>
      <p>{questionCount < 21 ? `Timer started: ${timer}` : null}</p>
      <p>
        {questionCount < 21
          ? "please select the operation you want to perform with these two number"
          : "please Submit"}
      </p>
      <p>
        Question {""}
        {questionCount >= 21 ? "completed" : questionCount}
      </p>
      {questionCount < 21 ? (
        <div>
          <span style={{ paddingRight: "2rem" }}>{numOne}</span>
          <select
            onChange={(e) => setOperator(e.target.value)}
            value={operator}
          >
            <option value='+'>+</option>
            <option value='-'>-</option>
            <option value='*'>*</option>
            <option value='/'>/</option>
          </select>
          <span style={{ paddingLeft: "2rem" }}>{numTwo}</span>
          <div>
            <p>please write your answer</p>
            <input
              type='text'
              placeholder='Type Answer'
              value={addAnswer}
              onChange={(e) => {
                setAddAnswer(e.target.value);
              }}
            />
          </div>
        </div>
      ) : null}

      {questionCount >= 21 ? (
        <div style={{ marginTop: "2rem" }}>
          <Link to='/submit'>
            <button>Submit</button>
          </Link>
        </div>
      ) : (
        <div style={{ marginTop: "2rem" }}>
          <button onClick={goToNext}>Next</button>
        </div>
      )}
    </div>
  );
}

export default StartQuiz;
