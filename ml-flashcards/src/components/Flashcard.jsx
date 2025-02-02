import React from "react";
import "./Flashcard.css";
import FlashcardText from "./FlashcardText.jsx";
import { useState } from "react";

const Flashcard = ({question, answer, isFlipped, setIsFlipped, color}) => {
  return (
    <div className = {`flashcard-container ${color}`} onClick = {() => setIsFlipped(!isFlipped)}>
          <FlashcardText text = {isFlipped ? answer : question} />   
    </div>
  );
};
export default Flashcard;
