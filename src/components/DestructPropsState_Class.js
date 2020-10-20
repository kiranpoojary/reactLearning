import React, { Component } from 'react'

class DestructPropsState_Class extends Component {

    render() {
        const { name, hasChildrn } = this.props
        //const {name, hasChildrn}=this.state   //but we dont hv state
        return (
            <div><h1> "DestructPropsState Class" Name : {name} - Has Children :{hasChildrn}</h1></div>
        )
    }
}

export default DestructPropsState_Class
