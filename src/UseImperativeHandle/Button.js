import React, { forwardRef, useImperativeHandle, useState } from "react";

// add a forwardRef(<function callback>)
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({  // () => ({ <function>() {<do something>},  }) return a object of functions definition
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
