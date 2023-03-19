import "./App.css";
import "./darkMode.css";
import logo from "./hodlinfo-logo-white.png";
import React, { useState, useEffect } from "react";
import FetchData from "./components/FetchData.js";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Switch } from "@mui/material";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [key, setKey] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleComplete = () => {
    // Increment the key to create a new instance of the component
    setKey(key + 1);
  };

  //Dark Theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <div className="main-wrapper container-fluid g-0">
        <div className="content-navbar">
          <div className="header-wrapper align-items-center justify-content-sm-center row">
            <div className="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">
              <a href="/">
                <div className="logo-wrapper">
                  <img src={logo} alt="logo" />
                </div>
              </a>
            </div>
            <div className="center-header col-12 col-sm-12 col-md-2 col-lg-4">
              <div className="btn-group">
                <select name="INR" id="INR" className="btn-select-class">
                  <option value="INR">INR</option>
                </select>
              </div>
              <div className="btn-group">
                <select name="BTC" id="BTC" className="btn-select-class">
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="USDT">USDT</option>
                  <option value="XRP">XRP</option>
                  <option value="TRX">TRX</option>
                  <option value="DASH">DASH</option>
                  <option value="ZEC">ZEC</option>
                  <option value="XEM">XEM</option>
                  <option value="IOST">IOST</option>
                  <option value="WIN">WIN</option>
                  <option value="BTT">BTT</option>
                  <option value="WRX">WRX</option>
                </select>
              </div>
              <div className="btn-group">
                <button type="BUY-BTC" className="btn btn-danger">
                  BUY BTC
                </button>
              </div>
            </div>
            <div className="right-header col-12 col-sm-12 col-md-5 col-lg-4">
              <div>
                <CountdownCircleTimer
                  key={key}
                  isPlaying
                  duration={4}
                  colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                  size={40}
                  trailStrokeWidth={7}
                  onComplete={handleComplete}
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              </div>
              <div className={`App ${theme}`}>
                <Switch
                  onChange={toggleTheme}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FetchData />
    </div>
  );
}

export default App;
