import React, { Component } from 'react'

export class BindEvent3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome Buddy"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }


    clickHandler() {
        this.setState({
            message: "Goodbye!  Bind3 in constructor"
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Logout</button>
            </div>
        )
    }
}

export default BindEvent3
