import React from "react";

const Event = () => {
    const increment = (a,b) => {
        alert(b.type)
    }
    return(
        <div>
            <button onClick={(event) => increment("goal",event)}>increment</button>
        </div>
    )
}

export default Event