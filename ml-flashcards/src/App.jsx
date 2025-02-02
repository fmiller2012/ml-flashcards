import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from "./components/Header.jsx";
import Flashcard from "./components/Flashcard.jsx";
import Flashbutton from "./components/Flashbutton.jsx";
import React from "react";

const flashcardsData = [
  { question: "What is the name of Machine Learning algorithm that generates a one-level decision tree expressed in the form of a set of rules that all test one particular attribute?", answer: "1R or 1-Rule", color: "blue", image: "/1r.png" },
  { question: "True or False: 1R is a simple, cheap method that comes up with good rules for characterizing the structure in a dataset?", answer: "True", color: "blue", image: "/1r.png" },
  { question: "What is the name of Machine Learning algorithm that uses all of the attributes and allows them to make contributions to the decisions that are equally important and independent of one another, given the class?", answer: "Naive Bayes", color: "red", image: "/naive-bayes.png.webp" },
  { question: "True or False: Naive Bayes gets is name from the naive assumption that the probabilities of its events are independent?", answer: "True", color: "red", image: "/naive-bayes.png.webp" },
  { question: "What is the name of Machine Learning algorithm that can be expressed recursively typically by selecting an attribute to place at the rot node and making one branch for each possible value?", answer: "Decision Tree", color: "orange", image: "/decision-tree.png" },
  { question: "True or False: Decision Tree bases its choice on which node to split further up the tree based on the purity of the information that each node provides?", answer: "True", color: "orange", image: "/decision-tree.png" },
  { question: "What is the name of Machine Learning algorithm(s) that takes a bottom-up approach towards classification by taking each class and seeking a way of covering all instances in it while at the same time excluding instances not in the class?", answer: "Covering Algorithms", color: "yellow", image: "/covering.png" },
  { question: "True or False: The covering algorithm generates rule-sets?", answer: "True", color: "yellow", image: "/covering.png" },
  { question: "What is the name of Machine Learning algorithm that forms the super-set of classification rules and can predict the value of more than one attribute?", answer: "Association Rules", color: "pink", image: "/association-rule.png" },
  { question: "True or False: Association Rules only differ from Classification Rules in that they can discover the structure on multiple sets of variables instead of just the class variable?", answer: "True", color: "pink", image: "/association-rule.png" },
  { question: "What is the name of Machine Learning algorithm whose outcome or class is numeric, all the attributes are typically numeric, and is expressed as a linear combination of the attributes with predetermined weights?", answer: "Linear Regression", color: "green", image: "/linear-regression.png" },
  { question: "True or False: Linear Regression has been widely used in statistical appliations for decades?", answer: "True", color: "green", image: "/linear-regression.png" },
  { question: "What is the name of Machine Learning algorithm that finds which member of the training set is closest to an unknown test instance by calculating the distance from every member of the training set and selecting the smallest efficiently?", answer: "Nearest Neighbors", color: "purple", image: "/nearest-neighbor.png" },
  { question: "True or False: Nearest Neighbors is an instance-based-learning method that uses the distance function to predict the class instance for what is nearest in its training data?", answer: "True", color: "purple", image: "/nearest-neighbor.png" },
  { question: "What is the name of Machine Learning algorithm that is applied when there is no class to be predicted but useful when instances need to be divided into natural groups?", answer: "Clustering", color: "brown", image: "/clustering.jpeg" },
  { question: "True or False: The classic clustering technique is called K-means and is considered unsupervised learning?", answer: "True", color: "brown", image: "/clustering.jpeg" }
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
        <Flashcard question = {flashcardsData[currentIndex].question} answer = {flashcardsData[currentIndex].answer} isFlipped = {isFlipped} setIsFlipped = {setIsFlipped} color = {flashcardsData[currentIndex].color} image = {flashcardsData[currentIndex].image} />
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
