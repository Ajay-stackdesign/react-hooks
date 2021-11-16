// import React, { UseLayoutEffect, useEffect } from "react";

// const LayoutEffect = () => {
    
//     useEffect(() => {
//         console.log("useeffect")
//     },[]);

//     UseLayoutEffect(() => {
//         console.log("uselayouteffect")
//     },[]);

//     return(
//         <div>
//             <h1>hello </h1>
//         </div>
//     )
// }

// export default LayoutEffect

import React, { useEffect, useLayoutEffect } from "react";

const LayoutEffect =() => {
    
    useEffect(() => {
        console.log("useEffect")
    },[])

    useLayoutEffect(() => {
        console.log("uselayout effect")
    },[])
    return(
        <div>
            <h1>
                hello
            </h1>
        </div>
    )
}

export default LayoutEffect