import React from 'react'

function RenderList3() {
    const employeeList = [
        {
            id: 101,
            name: "Kiran",
            skill: "ReactJs, Java"
        },
        {
            id: 102,
            name: "Appiee",
            skill: "Java"
        },
        {
            id: 103,
            name: "MrX",
            skill: "NodeJS"
        }
    ]
    const employeesAll = employeeList.map(person => <h2 key={person.id}>Iam {person.name}, my ID is {person.id}</h2>)
    return (
        <div>
            {employeesAll}
        </div>
    )
}

export default RenderList3
