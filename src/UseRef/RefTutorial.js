import React, { useRef } from "react"; // to manipulate dom elements

function RefTutorial() {
  const inputRef = useRef(null); // const <name of the reference> = useRef(null)

  const onClick = () => {
    inputRef.current.focus();
    inputRef.current.value = ""; // set the current value of element referred by the ref
  };

  return (
    // put the reference in the input dom element
    // a reference can be used to refer to a dom element
    // it can also be treated as a value
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} /> 
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
