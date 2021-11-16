import React, { useContext } from "react"

const Context3 = () => {
    // const user = useContext(UserContext)
    const user = useContext(useContext)
    return(
        <div>
            <h2>hello duniya</h2>
            <h1>{user}</h1>
        </div>
    )
}


export default Context3