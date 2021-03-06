import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "Parent_Kiran"
        }
        this.greetParent = this.greetParent.bind(this)

    }

    greetParent() {
        alert('Hello ' + this.state.parentName)
    }

    render() {
        return (
            <div>
                <ChildComponent greetParentHandler={this.greetParent} />
                {/* <button >Greet Parent</button> */}
            </div>
        )
    }
}

export default ParentComponent
