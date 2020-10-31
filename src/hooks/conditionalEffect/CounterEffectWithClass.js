import React, { Component } from 'react'
//https://youtu.be/8DYlzVUTC7s
class CounterEffectWithClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clciked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        //we added if so that we can prevent title change with same count on textbox change
        if (prevState.count !== this.state.count) {
            console.log("Changed");
            document.title = `Clciked ${this.state.count} times`
        }


    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => {
                    this.setState({
                        name: e.target.value
                    })
                }} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })} >
                    Clicked {this.state.count} times
                    </button>
            </div>
        )
    }
}

export default CounterEffectWithClass
