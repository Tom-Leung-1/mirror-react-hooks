import React, { useContext } from "react";
// import the AppContext + useContext
import { AppContext } from "./ContextTutorial";

function Login() {
  // grap the function like this 
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;
