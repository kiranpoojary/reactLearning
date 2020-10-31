import React, { useState, useEffect } from 'react'

function HookMousePosition() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const setMousePosition = e => {
        console.log("In setMousePosition");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("In useEffect");
        window.addEventListener('mousemove', setMousePosition)

        return () => {
            console.log("component unmounting code");
            window.removeEventListener('mousemove', setMousePosition)
        }
    }, [])

    return (
        <div>
            Hook X:{x} Y:{y}
        </div>
    )
}

export default HookMousePosition
