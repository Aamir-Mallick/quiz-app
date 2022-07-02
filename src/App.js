import "./App.css";
import Home from "./components/Home";
import StartQuiz from "./components/StartQuiz";
import Submit from "./components/Submit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [resultData, setResultData] = useState([]);
  const [questionCount, setQuestionCount] = useState(1);
  console.log("321", resultData, questionCount);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                setResultData={setResultData}
                setQuestionCount={setQuestionCount}
              />
            }
          />
          <Route
            path='/startquiz'
            element={
              <StartQuiz
                resultData={resultData}
                setResultData={setResultData}
                questionCount={questionCount}
                setQuestionCount={setQuestionCount}
              />
            }
          />
          <Route
            path='/submit'
            element={
              <Submit resultData={resultData} questionCount={questionCount} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
