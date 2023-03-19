import './App.css';
import logo from './hodlinfo-logo-white.png'
import React, { useState, useEffect } from "react";
import FetchData from './components/FetchData.js';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


function App() {
    const [key, setKey] = useState(0);

  const handleComplete = () => {
    // Increment the key to create a new instance of the component
    setKey(key + 1);
     };

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');

        let tbody = document.getElementById('table-body');
        tbody.classList.toggle('tbody-dark-mode');

        let thead = document.getElementsByTagName('th');
        for(let i=0; i < thead.length; i++) {
            thead[i].classList.toggle('thead-dark-mode');
        }
        
        let btn_groups = document.getElementsByClassName('btn-group');
        for(let i=0; i < btn_groups.length; i++) {
            btn_groups[i].classList.toggle('btn-dark-mode');
        }

        let btn_selects = document.getElementsByClassName('btn-select-class');
        for(let i=0; i < btn_selects.length; i++) {
            btn_selects[i].classList.toggle('btn-dark-mode');
        }

        let button = document.getElementsByClassName('btn-class');
        button[0].classList.toggle('btn-dark-mode');
    }
  return (
    <div className="App">
        
      <div className="main-wrapper container-fluid g-0">
        <div className="content-navbar">
            <div className="header-wrapper align-items-center justify-content-sm-center row">
                <div className="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">
                    <a href="/">
                        <div className="logo-wrapper">
                            <img src= {logo} alt="logo"/>
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
                        <button type="BUY-BTC" className="btn-class">BUY BTC</button>
                    </div>
                </div>
                <div className="right-header col-12 col-sm-12 col-md-5 col-lg-4">
                    <label className="switch">
                        <input type="checkbox" onChange={toggleTheme}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div>
                <CountdownCircleTimer
                    key={key}
                    isPlaying
                    duration={4}
                    colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
                    size={100}
                    trailStrokeWidth={10}
                    onComplete={handleComplete}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
                </div>
            </div>
        </div>
    </div>
    <FetchData />
    </div>
  );
}

export default App;
