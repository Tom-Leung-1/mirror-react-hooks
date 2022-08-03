import React, { useReducer } from "react";

// handle the state change
const reducer = (state, action) => { // state obj enclosing all attributes, action to be tackled
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText }; // new val of state
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

// useReducer vs useState:
// useReducer: a function (reducer) is called to set the state -> allows more complexity
// useState: just set the value directly

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true }); // useReducer(<function>, { <attr1>: <initial val>, showText: true })

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
