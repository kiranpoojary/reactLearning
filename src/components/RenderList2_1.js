import React from 'react'
import Employee from './RenderList2_2'

function RenderList2_1() {
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
    const employeesAll = employeeList.map(person => <Employee key={person.id} person={person} />)
    return (
        <div>
            {employeesAll}
        </div>
    )
}

export default RenderList2_1
