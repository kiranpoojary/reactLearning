import { useState } from "react"
import React, { useEffect } from 'react'

function IntervalHook() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        //We can use multiple useEffect in same component
        const tick = () => {
            setCount(count + 1)
            //OR setCount(prevCount => prevCount + 1)  this also executable and its not required dependencies[]
        }

        //only usEffect dependency functions(tick and displayHello) should be defined inside otherwise warning
        // function displayHello() {
        //     console.log("the method tick and displayHello only used inside effect so we can move its defination inside effect otherwise warning we get");
        // }
        // displayHello()

        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHook
