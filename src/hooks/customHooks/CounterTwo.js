import React, { useState } from 'react'
import useCounter from './useCounter'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter(5, 10)

    return (
        <div>

            COUNT IS {count}
            <br />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo