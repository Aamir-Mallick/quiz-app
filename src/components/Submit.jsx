import React, { useEffect, useState } from "react";
import "./style.css";

function Submit({ resultData, questionCount }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let temp = 0;

    resultData.forEach((x) => {
      if (x.correct) {
        temp = temp + 1;
      }
    });

    setTotal(temp);
  }, []);

  return (
    <div style={{ margin: "0px auto", width: "500px" }}>
      <h2>Result</h2>
      <h3>Total score {total}</h3>
      {resultData.map((data, index) => (
        <div
          style={{
            display: "flex",
            background: data.correct ? "white" : "red",
            color: data.correct ? "black" : "white",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "5px",
            borderRadius: "5px",
          }}
        >
          <p style={{ padding: "1px" }}>Question {data[`Q${index + 1}`]}</p>
          <p style={{ padding: "3px" }}>your Answer: {data["Your-Answer"]}</p>
          <p style={{ padding: "3px" }}>
            Correct Answer: {data["Correct-Answer"]}
          </p>
          <p style={{ padding: "3px" }}>
            Corret: {data.correct ? "Yes" : "No"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Submit;
