import React from "react";
import "./Flashcard.css";
import FlashcardText from "./FlashcardText.jsx";
import { useState } from "react";

const Flashcard = ({question, answer, isFlipped, setIsFlipped, color, image}) => {
  return (
    <div className = "flashcard-container" onClick = {() => setIsFlipped(!isFlipped)}>
      <div className = "flashcard-background" style={{ backgroundImage: `url(${image})` }}></div>
      <div className = {`flashcard-overlay ${color}`}></div>
      <FlashcardText text = {isFlipped ? answer : question} />   
    </div>
  );
};
export default Flashcard;
