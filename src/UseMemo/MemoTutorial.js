import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoTutorial() {
  // to improve performance and reduce latency
  // every time the state change -> the function will be called once again
  // useMemo -> only recreate the function if the data changes
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  // useMemo(<function with return value>, [<state to be listened to>])
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    // getLongestName is a value, not a function
    <div className="App">
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
