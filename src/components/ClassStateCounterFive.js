import React, { Component } from 'react'

class ClassStateCounterFive extends Component {


    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incCounterOne() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    incCounterFive() {
        this.incCounterOne()
        this.incCounterOne()
        this.incCounterOne()
        this.incCounterOne()
        this.incCounterOne()
    }

    render() {
        return (
            <div>
                <h1>Counter+5 : {this.state.count}</h1>
                <button onClick={() => this.incCounterFive()}>Add 5</button>
            </div>
        )
    }
}

export default ClassStateCounterFive
