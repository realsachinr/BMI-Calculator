import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [message, setMessage] = useState("");

  // Logic for
  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === "" || height === "") {
      alert("Please enter weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBMI(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("Underweight");
      } else if (bmi > 25 && bmi < 30) {
        setMessage("You are a healthy Weight");
      } else {
        setMessage("Overweight");
      }
    }
  };

  // reload
  let reload = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="title">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div className="input-container">
            <div>
              <label>Weight (ibs) : </label>
              <input
                type="text"
                placeholder="Enter Weight Value"
                value={weight}
                className="input-box"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Height (in) : </label>
              <input
                type="text"
                className="input-box"
                placeholder="Enter Height Value"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
            </div>
          </div>

          <div className="btn-box">
            <button className="btn" type="submit">
              Calculate BMI
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
