import React, { useState } from 'react'

function StateWithArray() {
    const [items, setItems] = useState([])

    const itemAdder = () => {
        setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1 }])
    }
    return (
        <div>
            <button onClick={itemAdder}>Add items</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default StateWithArray
