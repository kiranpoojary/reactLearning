import React, { Component } from 'react'

export class ClassMousePosition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }
    setMousePosition = e => {
        this.setState({
            x: e.clientX, y: e.clientY
        })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.setMousePosition)
    }

    render() {
        return (
            <div>
                Class  X:{this.state.x} Y: {this.state.y}
            </div>
        )
    }
}

export default ClassMousePosition
