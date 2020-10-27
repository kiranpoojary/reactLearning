import React, { Component } from 'react'

class HoverCounter extends Component {
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
        const { count } = this.state
        return (
            <div>
                <h2 onMouseOver={this.incrCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverCounter
