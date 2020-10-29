import React, { useState } from 'react'

function HookCounterTwo() {
    const [count, setCount] = useState(0)


    const incrFiveWorst = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1)
        }
    }

    const incrFiveBest = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (

        <div>
            Count : {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={incrFiveWorst}>Increment 5 worst method</button>
            <button onClick={incrFiveBest}>Increment 5 Best Method</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment 1 Best </button>
        </div>
    )
}

export default HookCounterTwo
