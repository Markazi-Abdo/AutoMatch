import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import "./Style.css";

const Price = () => {
  const dispatch = useDispatch();
  const [leftValue, setLeftValue] = useState(10000);
  const [rightValue, setRightValue] = useState(60000);

  const min = 10000;
  const max = 60000;

  const { selectMinPrice, selectMaxPrice } = useSelector((state) => ({
    selectMinPrice: state.selectMinPrice,
    selectMaxPrice: state.selectMaxPrice,
  }));

  const updateLeftValue = (value) => {
    const newValue = Math.min(value, rightValue);
    setLeftValue(newValue);
  };

  const updateRightValue = (value) => {
    const newValue = Math.max(value, leftValue);
    setRightValue(newValue);
  };

  useEffect(() => {
    dispatch({
      type: "MIN_MAX_PRICE",
      payload: { minPrice: leftValue, maxPrice: rightValue },
    });
  }, [leftValue, rightValue, dispatch]);

  useEffect(() => {
    setLeftValue(selectMinPrice);
    setRightValue(selectMaxPrice);
  }, [selectMinPrice, selectMaxPrice]);

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
          step={5000}
          value={leftValue}
          onChange={(e) => updateLeftValue(e.target.value)}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={5000}
          value={rightValue}
          onChange={(e) => updateRightValue(e.target.value)}
        />
      </div>
      <div className="labels">
        <span
          className="label"
          style={{
            left: `calc(${leftPercent}% - 20px)`,
          }}
        >
          {leftValue.toLocaleString()}
        </span>
        <span
          className="label second"
          style={{
            left: `calc(${rightPercent}% - 20px)`,
          }}
        >
          {rightValue.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default Price;
