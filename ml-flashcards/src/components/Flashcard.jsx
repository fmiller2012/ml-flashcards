import React from "react";
import "./Flashcard.css";
import FlashcardText from "./FlashcardText.jsx";
import { useState } from "react";

const Flashcard = ({question, answer, isFlipped, setIsFlipped, color, image}) => {
  console.log("Image URL:", image);
  console.log("Resolved Path:", `/images/${image}`);
  return (
    <div className={`flashcard-container ${isFlipped ? "flipped" : ""}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="flashcard-inner">
        <div className="flashcard-background" style={{ backgroundImage: `url(/${image})` }}></div>
        <div className={`flashcard-overlay ${color}`}>
        <FlashcardText text={question} />
        </div>
        <div className={`flashcard-overlay back ${color}`}>
          <FlashcardText text={answer} />
        </div>
      </div>
    </div>
  );
};
export default Flashcard;
