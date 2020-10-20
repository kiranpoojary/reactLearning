import React, { Component } from 'react'

class ConditionalRender1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loged: true
        }
    }

    render() {

        //1.If/else approach
        //if (this.state.loged) {
        //     return (
        //         <div>
        //             Hello Kiran
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Hello Guest
        //         </div>
        //     )

        // }




        //2.variable approach
        // let message
        // if (this.state.loged) {
        //     message = <div>Hello Kiran</div>

        // } else {
        //     message = <div>Hello Guest</div>
        // }
        // return message



        //3)conditional approach
        // return (this.state.loged) ? <div>Welcom Kiran</div> : <div>Welcome Guest</div>


        //4. short circute approach
        return this.state.loged && <div>Welcome Kiran</div>

    }
}

export default ConditionalRender1
