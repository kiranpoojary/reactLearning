import React, { Component } from 'react'

class GreetClassProp extends Component {
    render() {
        return (
            <div>
                <h1>"Class Props": {this.props.name}</h1>
                { this.props.children}
            </div>
        )
    }
}

export default GreetClassProp