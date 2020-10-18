import React, { Component } from 'react'

class ClassStateCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incCounter() {
        this.setState({
            count: this.state.count + 1
        }, () => { console.log("Counter Value in CallBack :" + this.state.count); })
        console.log("Counter Value outside :" + this.state.count);
    }

    render() {
        return (
            <div>
                <h1>Counter is {this.state.count}</h1>
                <button onClick={() => this.incCounter()}>Increment Count</button>
            </div>
        )
    }
}

export default ClassStateCounter
