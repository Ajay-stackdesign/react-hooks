import React, { createContext, useState } from "react"
import Counter from "./Counter";
import Reducer1 from "./Reducer1";
import Effect from "./Effect";
import Refhook from "./Refhook";
// import UseLayoutEffect from "./UseLayoutEffect";
import LayoutEffect from "./LayoutEffect";
import Imperativehandle from "./Imperatie/ImperativeHandle";
import Context from "./context/Context1";

const UserContext = createContext()

function App() {

  const [user, setUser] = useState("ajay");

  const changeUser = (e) => {
    setUser(e.target.value)
  }

  return (
    <div className="App">
      <Counter />
      <Reducer1 />
      <Effect />
      <Refhook />
      <LayoutEffect />
      <Imperativehandle />
      {/* <UserContext.Provider value={user}> */}
      <UserContext.Provider value={"ajay"}>
      {/* <h1>{`Hello ${user}`}</h1> */}
      <Context />
      </UserContext.Provider>
      {/* <UserContext.Provider value={user}> */}
      {/* <Context user = {user}/> */}
      {/* <h1>{`hello ${user}`}</h1> */}
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
