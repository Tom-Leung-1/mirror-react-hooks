import React, { useRef } from "react";
import Button from "./Button";

// manipulate the child component without passing the props into the child and setting state attrubute in the parent
// 1. make a reference
// 2. import forwardRef in the child component so that it can accept a ref from the parent -> wrap the function callback with this keyword
// 3. use reference to call a function defined inside the useImperativeHandle (in child component)
// when to use: ?
function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle(); // call a function in the child component 
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
