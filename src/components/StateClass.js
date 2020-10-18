import React, { Component } from 'react'

class StateClass extends Component {
    constructor() {
        super()
        this.state = {
            message: "NOT Subscribed"
        }
    }

    subscribedSuccess() {
        if (this.state.message == "NOT Subscribed") {
            this.setState({
                message: "Thaks For Subscribing"
            })
        } else {
            this.setState({
                message: "NOT Subscribed"
            })
        }

    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.subscribedSuccess()} style={{ color: 'red' }}><strong>Subscribe</strong></button>
            </div>
        )
    }
}


export default StateClass