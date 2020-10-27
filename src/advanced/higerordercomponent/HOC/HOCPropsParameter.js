import React, { Component } from 'react'
import withCounter from './withCounter'


class ClickCount extends Component {


    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>
                    {this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCount, 10) 
