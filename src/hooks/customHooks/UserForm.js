
import React, { useState } from 'react'
import useInput from './useInput'

function UserForm() {
    // const [fName, setfName] = useState('')
    // const [lName, setlName] = useState('')
    const [fName, bindfName, resetfName] = useInput('')
    const [lName, bindlName, resetlName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${fName} ${lName}`)
        resetfName()
        resetlName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input typr="text" {...bindfName} />
                </div>
                <div>
                    <label>First Name</label>
                    <input typr="text" {...bindlName} />
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default UserForm
