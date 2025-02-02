import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from "./components/Header.jsx";
import Flashcard from "./components/Flashcard.jsx";
import Flashbutton from "./components/Flashbutton.jsx";
import React from "react";

const flashcardsData = [
  { question: "What is React?", answer: "A JavaScript library for building user interfaces.", color: "blue" },
  { question: "What is a component?", answer: "A reusable piece of UI.", color: "blue" },
  { question: "What is state?", answer: "An object that determines how that component renders & behaves.", color: "red" },
  { question: "What is a prop?", answer: "A way to pass data from parent to child components.", color: "red" },
  { question: "What is JSX?", answer: "A syntax extension that looks similar to XML or HTML.", color: "orange" },
  { question: "What is a hook?", answer: "A special function that lets you use state and other React features.", color: "orange" },
  { question: "What is useState?", answer: "A hook that lets you add state to functional components.", color: "yellow" },
  { question: "What is useEffect?", answer: "A hook that lets you perform side effects in function components.", color: "yellow" },
  { question: "What is a virtual DOM?", answer: "A lightweight copy of the actual DOM.", color: "pink" },
  { question: "What is a key in React?", answer: "A unique identifier for elements in a list.", color: "pink" },
  { question: "What is a higher-order component?", answer: "A function that takes a component and returns a new component.", color: "green" },
  { question: "What is context?", answer: "A way to pass data through the component tree without props.", color: "green" },
  { question: "What is Redux?", answer: "A state management library for JavaScript apps.", color: "purple" },
  { question: "What is a reducer?", answer: "A function that determines changes to an application's state.", color: "purple" },
  { question: "What is middleware?", answer: "A function that runs between dispatching an action and the moment it reaches the reducer.", color: "brown" },
  { question: "What is a pure function?", answer: "A function that returns the same result given the same arguments.", color: "brown" }
];

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const shuffleFlashcard = () => {
    setCurrentIndex(Math.floor(Math.random() * flashcardsData.length));
    setIsFlipped(false);
  };
  return (
    <div className = "app">
      <Header />
      <div className = "flash-container">
        <Flashcard question = {flashcardsData[currentIndex].question} answer = {flashcardsData[currentIndex].answer} isFlipped = {isFlipped} setIsFlipped = {setIsFlipped} color = {flashcardsData[currentIndex].color} />
      </div>
      <div className = "flash-button">
        <Flashbutton shuffleFlashcard = {shuffleFlashcard} />
      </div>
    </div>
  );
};

{/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/}

export default App;
