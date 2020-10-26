import React, { Component } from 'react'
import MountChild from './MountingChild'

class Updating extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Kiran"
        }

        console.log("In Update Constructor");
    }


    static getDerivedStateFromProps() {
        console.log("In Update static getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate() {
        console.log("In Update shouldComponentUpdate");
        return true
    }
    componentDidUpdate() {
        console.log("In Update ComponentDidUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("In Update getSnapshotBeforeUpdate");
        return null
    }

    componentDidMount() {
        console.log("In Update componentDidMount");
    }


    changeState = () => {
        this.setState({
            name: "Appiee"
        })
    }

    render() {
        console.log("In Update render")
        return (

            < div >
                <div>Update</div>
                <button onClick={this.changeState}>Change State</button>
                <MountChild />
            </div >


        )
    }
}

export default Updating
