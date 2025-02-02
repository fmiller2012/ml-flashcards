import React from "react";
import "./FlashcardText.css";

const FlashcardText = (prop) => {
  return (
    <p className = "flashcard-text">{prop.text}</p>
  );
};

export default FlashcardText;
