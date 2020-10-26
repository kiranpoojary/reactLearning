import React, { Component } from 'react'

class MountingChild extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Kiran"
        }

        console.log("In Mount child Constructor");
    }


    static getDerivedStateFromProps() {
        console.log("In Mount child static getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("In Mount child componentDidMount");
    }

    render() {
        console.log("In Mount child render")
        return (

            < div >Child Mounting</div >


        )
    }
}

export default MountingChild
