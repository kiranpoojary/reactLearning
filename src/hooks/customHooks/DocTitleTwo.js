import React, { useState } from 'react'
import useDocTitleChanger from './useDocTitleChanger'


function DocTitleOneTwo() {
    const [count, setCount] = useState(0)
    useDocTitleChanger(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count-{count}</button>
        </div>
    )
}

export default DocTitleOneTwo
