import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");
  // useMemo  -> store the memomized value returned by the function
  // useCallback -> store the memomized function itself
  // function is recreated every time there is a state changed -> keep calling useEffect in child (the thing to be listened to is a function)
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    // returnComment is a function, not a value
    <div className="App">
      <Child returnComment={returnComment} />

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
