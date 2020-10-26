import React, { Component } from 'react'
import MountChild from './MountingChild'

class MountingParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Kiran"
        }

        console.log("In Mount Parent Constructor");
    }


    static getDerivedStateFromProps() {
        console.log("In Mount Parent static getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("In Mount Parent componentDidMount");
    }

    render() {
        console.log("In Mount Parent render")
        return (

            < div >
                Parent Mounting
                <MountChild />
            </div >


        )
    }
}

export default MountingParent
