import React, { useContext } from "react"
import { UserConnect } from "./App"

const Context3 = () => {
    const user = useContext(UserConnect)
    
    return(
        <div>
            <h2>hello duniya {user}</h2>
            
        </div>
    )
}


export default Context3