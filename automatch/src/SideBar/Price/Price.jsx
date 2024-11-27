import { useState } from "react";
import "./Style.css";

const Price = () => {
  const [leftValue, setLeftValue] = useState(200000);
  const [rightValue, setRightValue] = useState(900000);

  const min = 200000;
  const max = 900000;

  const updateLeftValue = (value) => {
    setLeftValue((prev) => Math.min(value, rightValue));
  };

  const updateRightValue = (value) => {
    setRightValue((prev) => Math.max(value, leftValue));
  };

  const leftPercent = ((leftValue - min) / (max - min)) * 100;
  const rightPercent = ((rightValue - min) / (max - min)) * 100;

  return (
    <div className="price-container">
      <div className="diagram">
        <div
          className="shaded"
          style={{
            left: `${leftPercent}%`,
            width: `${rightPercent - leftPercent}%`,
          }}
        ></div>
      </div>
      <div className="slider-container">
        <input
          type="range"
          min={min}
          max={max}
          step={10000}
          value={leftValue}
          onChange={(e) => updateLeftValue(parseInt(e.target.value))}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={10000}
          value={rightValue}
          onChange={(e) => updateRightValue(parseInt(e.target.value))}
        />
      </div>
      <div className="labels">
        <span
          className="label"
          style={{
            left: `calc(${leftPercent}% - 20px)`, // Adjust position to center the label
          }}
        >
          {leftValue.toLocaleString()}
        </span>
        <span
          className="label"
          style={{
            left: `calc(${rightPercent}% - 20px)`, // Adjust position to center the label
          }}
        >
          {rightValue.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default Price;
