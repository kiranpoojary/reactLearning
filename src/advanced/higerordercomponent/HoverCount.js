import React, { Component } from 'react'

class HoverCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrHover = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1 onMouseOver={this.incrHover}>Hovered {count} Times</h1>
            </div>
        )
    }
}

export default HoverCount
