import React from "react";

const Car = (props) => {
    return(
        <div>
            {/* <h1>where are you my{props.brand.name}</h1> */}
            {/* <h2>I am a { props.key } </h2> */}
            <li>I am a { props.brand }</li>
            {/* <h1>i am a { props.brand1 }!</h1> */}
            {/* <li>i am a { props.brand1} </li> */}
        </div>
    )
}


export default Car

