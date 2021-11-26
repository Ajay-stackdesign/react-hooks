import React, { useState } from "react";

const Car = (props) => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });



    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }

    return (
        <div>
            {/* <h1>where are you my{props.brand.name}</h1> */}
            {/* <h2>I am a { props.key } </h2> */}
            <li>I am a {props.brand}</li>
            {/* <h1>i am a { props.brand1 }!</h1> */}
            {/* <li>i am a { props.brand1} </li> */}
            {/* <h1>i am {car.brand}</h1>
            <h2> my model is{car.model}and year is{car.year}and color is {car.color} </h2>


            <button type="button" onClick={updateColor}>Blue</button>
            <h3>{car}</h3> */}
            <h1>My {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}.</p>
            <button
                type="button"
                onClick={updateColor}
            >Blue</button>

        </div>
    )
}


export default Car