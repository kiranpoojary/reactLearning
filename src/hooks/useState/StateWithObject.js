import React, { useState } from 'react'

function StateWithObject() {
    const [name, setName] = useState({ FName: '', LName: '' })
    return (
        <div>
            <input type="text" value={name.FName} onChange={e => setName({ ...name, FName: e.target.value })} />
            <input type="text" value={name.LName} onChange={e => setName({ ...name, LName: e.target.value })} />
            <h3>First Name : {name.FName}</h3>
            <h3>First Name : {name.LName}</h3>
            <h5>{JSON.stringify(name)}</h5>
        </div>
    )
}

export default StateWithObject
