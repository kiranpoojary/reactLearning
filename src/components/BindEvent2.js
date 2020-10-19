import React, { Component } from 'react'

export class BindEvent2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome"
        }

    }

    clickHandler() {
        this.setState({
            message: "Goodbye!  Bind2 Arrow function"
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Logout</button> */}
                <button onClick={() => this.clickHandler()}>Logout</button>
            </div>
        )
    }
}

export default BindEvent2
