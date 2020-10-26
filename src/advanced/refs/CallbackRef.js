import React, { Component } from 'react'

class CallbackRef extends Component {
    constructor(props) {
        super(props)
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHanlder}>Submit</button>
            </React.Fragment>
        )
    }
}

export default CallbackRef
