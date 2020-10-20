import React from 'react'

function RenderList1() {
    const names = ["Kiran", "Appiee", "Mr.X", "Mr.Y"]
    const styledNames = names.map(name => <h3 key={name}>{name}</h3>)
    // key value should be unique
    return <div>{styledNames}</div>
    // return (
    //     <div>
    //         {/* <h1>{names[0]}</h1>
    //         <h1>{names[1]}</h1>
    //         <h1>{names[2]}</h1>
    //         <h1>{names[3]}</h1> */}
    //         {
    //             names.map(name => <h1>{name}</h1>)
    //         }

    //     </div>
    // )
}

export default RenderList1
