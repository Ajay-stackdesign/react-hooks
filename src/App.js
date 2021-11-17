import React, { createContext, useEffect, useState }  from "react"
import Counter from "./Counter";
import Reducer1 from "./Reducer1";
import Effect from "./Effect";
import Refhook from "./Refhook";
// import UseLayoutEffect from "./UseLayoutEffect";
import LayoutEffect from "./LayoutEffect";
import Imperativehandle from "./Imperatie/ImperativeHandle";
import Context from "./Context";


const UserConnect = createContext()

function App() {
  const [user, setUser] = useState("ajay") ;
  
  useEffect(() => {
    setUser("let buil it")
  },[])

  return (
    <div className="App">
      <Counter />
      <Reducer1 />
      <Effect />
      <Refhook />
      <LayoutEffect />
      <Imperativehandle />
      <UserConnect.Provider value={user}>
        <Context />
      </UserConnect.Provider>
    </div>
  );
}

export default App;
export { UserConnect }
