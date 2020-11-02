import React, { useState, useCallback } from 'react'
//https://www.youtube.com/redirect?event=video_description&v=IL82CzlaCys&redir_token=QUFFLUhqbUN2cTA0aDJya092bUNIWDVzbTdMM3pWZ3JBQXxBQ3Jtc0ttaGttVWVKV0xZTVRWTDN0WE9GRGs2RHpfbndoa0x6MWc4WUluZ3pqWTFDZ1U1czZMaGRLRUowaDdNYUM3TnVqXzZxbFZkNXpRNTNWa0JmVDF5alBpTFhyX1pSLUVhNlVKMHZZYVZTMm05X25nWEdrMA%3D%3D&q=https%3A%2F%2Fkentcdodds.com%2Fblog%2Fusememo-and-usecallback

import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary} >Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
