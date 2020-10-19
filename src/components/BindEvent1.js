import React, { Component } from 'react'

export class BindEvent1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome"
        }
    }

    clickHandler() {
        this.setState({
            message: "Goodbye!  Bind"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler.bind(this)}>Logout</button>
            </div>
        )
    }
}

export default BindEvent1
