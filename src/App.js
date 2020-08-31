import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World! How are you today?
        </a>
        <p>I see we're going to be making a social-media clone this week. Maybe a meme video competition?</p>
        <h2>Did you see the new Uncle Roger video? :'D</h2>
      </p>
    </div>
  );
}

export default App;
