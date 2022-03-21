import React from "react"; 
import logo from './logo.svg';

import './App.css';
import Week from "./Week"
import Review from "./Review"

function App() {
  return (
    <div className="App">
      <h1>이번 일주일은 어땠나요?</h1>
      <Week/>
    </div>
  );
}

export default App;
