import React, { useEffect, useState } from "react"

const Effect = () => {
    const [ count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count+1)
        },1000)
        console.log("hi")
    },[])
    return(
        <div>
            {count}
        </div>
    )
}

export default Effect