import { render } from '@testing-library/react'
import React from 'react'

// const DestructPropsState_Fun = ({ name, hasChildrn }) => {
//     return (
//         <div><h1> "DestructProps" Name : {name} - Has Children :{hasChildrn}</h1></div>
//     )
// }


//OR props inside function
const DestructPropsState_Fun = props => {
    const { name, hasChildrn } = props
    return (
        <div><h1> "DestructPropsState Fun" Name : {name} - Has Children :{hasChildrn}</h1></div>
    )
}


export default DestructPropsState_Fun