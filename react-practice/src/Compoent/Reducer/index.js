import React, { useReducer } from "react";

const reducerPoints = (state, action) => {
  switch (action.type) {
    case "one":
      return { points: state.points + 1 };
    case "two":
      return { points: state.points + 2 };
    case "three":
      return { points: state.points + 3 };
    case "four":
      return { points: state.points + 4 };
    case "five":
      return { points: state.points + 5 };
    case "six":
      return { points: state.points + 6 };
    default:
      return state;
  }
};

function LearningReducer() {
  const initialPoints = { points: 0 };
  const [statePoints, dispatchPoints] = useReducer(reducerPoints, initialPoints);

  return (
    <div>
      <p>Count: {statePoints.points}</p>
      <button onClick={() => dispatchPoints({ type: "one" })}>1</button>
      <button onClick={() => dispatchPoints({ type: "two" })}>2</button>
      <button onClick={() => dispatchPoints({ type: "three" })}>3</button>
      <button onClick={() => dispatchPoints({ type: "four" })}>4</button>
      <button onClick={() => dispatchPoints({ type: "five" })}>5</button>
      <button onClick={() => dispatchPoints({ type: "six" })}>6</button>
    </div>
  );
}

export default LearningReducer;
