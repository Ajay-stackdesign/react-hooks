// import React, { useRef, useState } from "react";

// const Refhook = () => {
//     const [value, setValue] =useState("ajay")
//     const input= useRef();

//     const focusInput = () => {
//         input.current.focus()
//     }

//     const changeValue = (e) => {
//         setValue(e.target.value)
//     }
//     return(
//         <div>
//             <input type="text" ref={input}/>
//             <button onChange={focusInput}>click here</button>
//             {/* <h1>{data}</h1> */}
//             <input type="text" onChange={changeValue}/>
//             <h1>{value}</h1>
//         </div>
//     )
// }

// export default Refhook


import React, { useRef, useState } from "react";

const Refhook = () => {
    const inputElement = useRef()
    const [value, setValue] = useState("ajay");

    const onclick = () => {
        inputElement.current.focus();
    }

    const changeEvent = (e) => {
        setValue(e.target.value)
    }

    return(
        <div>
            <input type="text" ref={inputElement}/>
            <button onClick={onclick}>click me</button>
            <input type="text" onChange={changeEvent}/>
            <h1>{value}</h1>
        </div>
    )
}

export default Refhook