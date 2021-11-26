// import React, { useReducer } from "react"

// const reducer = ((state, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return { count: state.count + 1, showText: state.showText }
//         case "toggleShowText":
//             return { count: state.count, showText: !state.showText }
//         default:
//             return state;
//     }


// const Reducer1 = () => {
//     const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })


//     return (
//         <div>
//             <h1>{state.count}</h1>
//             {/* <button onClick={() =>
//                 dispatch({ type: "INCREMENT" })
//                 dispatch({type: "toggleShowText"})}
//                 >click me
//                 </button> */}
//             <button
//              onclick={() => {
//                 dispatch({type: "INCREMENT"});
//                 dispatch({type: "toggleShowText"});
//             }}>click me</button>
//             { state.showText && <h1>this is a text!</h1> }
//         </div >
//     )
// }

// export default Reducer1

import React, { useReducer } from "react";

const reducer = (state,action) => {
    switch(action.type){
        case "INCREMENT":
            return{ count: state.count + 1, showText: state.showText};
        case "toggleShowText":
            return{ count: state.count, showText: !state.showText};
        default:
            return state;
    }
}
const Reducer1 = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true})
    
    return(
        <div>
            <h1>{ state.count }</h1>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "toggleShowText" })
            }}>click me</button>
            { state.showText && <p>this the text</p> }
        </div>    
    )
}

export default Reducer1