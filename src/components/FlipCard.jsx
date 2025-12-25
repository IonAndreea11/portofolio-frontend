import React from "react";
import "../styles/FlipCard.css";

function FlipCard({ children, back, rotate = "y", className = "" }) {
  return (
    <div className={`flip-group ${className}`}>
      <div className={`flip-inner ${rotate}`}>
        <div className="flip-front">{children}</div>

        <div className="flip-back">{back}</div>
      </div>
    </div>
  );
}

export default FlipCard;
