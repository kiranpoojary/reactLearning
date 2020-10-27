import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    //static contextType = UserContext
    render() {
        return (
            <div>
                Hello {this.context} from Context API
                <ComponentF />
            </div>
        )
    }
}

Component.contextType = UserContext
export default ComponentE
