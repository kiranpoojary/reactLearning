import React, { Component } from 'react'

export class BindEvent4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome bind4"
        }
    }

    clickHandler = () => {
        this.setState({
            message: "Goodbye!. Bind4 arrow function as class prperty"
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

export default BindEvent4
