import React from "react";
import "./Flashbutton.css";

const Flashbutton = ({shuffleFlashcard}) => {
  return (
    <div className = "button-container">
      <button className = "left-button" onClick = {shuffleFlashcard}> &lt;- </button>
      <button className = "right-button" onClick = {shuffleFlashcard}> -&gt; </button> 
    </div>
  );
};

export default Flashbutton;
