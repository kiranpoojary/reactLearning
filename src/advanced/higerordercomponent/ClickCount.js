import React, { Component } from 'react'

class ClickCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const count = this.state.count
        return (
            <div>

                <button onClick={this.incrCount}>Click {count} times</button>
            </div>
        )
    }
}

export default ClickCount
