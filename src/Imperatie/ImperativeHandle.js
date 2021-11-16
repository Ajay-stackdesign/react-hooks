import React, { useRef } from "react";
import Button from "./Button";


const Imperativehandle = () => {
    const buttonRef = useRef()

    const refValue = () => {
        buttonRef.current.alterToggle();
    }
    return(
        <div>
            <button onClick={refValue}>click from parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}

export default Imperativehandle;