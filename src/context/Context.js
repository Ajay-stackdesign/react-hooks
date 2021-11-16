import React, { createContext, useState } from "react"
import Context1 from "./Context1";

// const UserContext = createContext()
const UserContext = createContext();

const Context = () => {
    const [user, setUser] = useState("ajay");

    const changeUser = (e) => {
        setUser(e.target.value)
    }

    return(
        <div>
            {/* <UserContext.Provider value={user}>
            <h1>{`hello ${user}`}</h1>
            <Context1 user={user} />
            </UserContext.Provider> */}
            {/* <h2>{user}</h2>
            <button onChange={changeUser}>click here</button>
            <h1>hello world</h1> */}
            {/* <Context1 />  */}
            {/* <input type="text" onChange={changeUser}/> */}
            <Context1 />

            
        </div>
    )
}

export default Context