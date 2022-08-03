import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => { // when state is changed -> the function will be called (every time we rerender the page)
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []); // an array of all states you would listen to -> 
  // 2 cases:
  //  a. [data] -> every time data is changed -> call useEffect again -> called twice (1st: render page + data empty 2nd: setData in useEffect -> change data -> called once again)
  //  b. [] -> called once in the 1st render
  //  c. [count] -> called once -> called again when count btn is clicked
  //  d. no [] -> every state change will call the useEffect again

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
