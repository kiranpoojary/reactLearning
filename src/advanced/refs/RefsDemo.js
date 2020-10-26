import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        this.inputref = React.createRef()
    }
    componentDidMount() {
        this.inputref.current.focus()
        console.log(this.inputref);
    }
    clickHanlder = () => {
        alert(this.inputref.current.value)
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" ref={this.inputref} />
                <button onClick={this.clickHanlder}>Submit</button>
            </React.Fragment>
        )
    }
}

export default RefsDemo
