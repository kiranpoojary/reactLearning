import React, { Component } from 'react'

class Mounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Kiran"
        }

        console.log("In Constructor");
    }


    static getDerivedStateFromProps() {
        console.log("In static getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("In componentDidMount");
    }

    render() {
        console.log("In render")
        return (

            < div > Mounting</div >


        )
    }
}

export default Mounting
