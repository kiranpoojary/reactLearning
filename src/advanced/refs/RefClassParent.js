import React, { Component } from 'react'
import RefChild from './RefClassChild'
//https://youtu.be/8aCXVC9Qmto
class RefClassParent extends Component {
    constructor(props) {
        super(props)
        this.compoRef = React.createRef()
    }

    clickHandler = () => {
        this.compoRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <RefChild ref={this.compoRef} />
                <button onClick={this.clickHandler} >Focus Input</button>
            </div>
        )
    }
}

export default RefClassParent
