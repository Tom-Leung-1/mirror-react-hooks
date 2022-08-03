import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

// above the component -> create the context -> export it to other file
export const AppContext = createContext(null);
// when you have to pass many states as props
function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    // wrap the components with AppContext
    // value = object that encloses all the states and functions
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;
