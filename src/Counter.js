import React, { useState } from "react";

const Counter = () => {
    // let counter = 0
    const[count, setCount] = useState(0)
    const[value, setValue] = useState("ajay")

    const increment = () => {
        // counter = counter + 1
        // console.log(counter)
        setCount(count + 1)  //this lines means old values plus one 
    }
    const changeValue = (event) => {
        setValue(event.target.value);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick = {increment}>+</button>
            <input type= "text" onChange ={changeValue}/>
            <h1>{value}</h1>
        </div> 
    )
}

export default Counter