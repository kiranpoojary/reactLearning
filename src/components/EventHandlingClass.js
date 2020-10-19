import React, { Component } from 'react'

export class EventHandlingClass extends Component {


    dislikeHandler() {
        console.log("Disliked");
    }

    render() {
        return (
            <div>
                <button onClick={this.dislikeHandler}>Class Dislike Click</button>
            </div>
        )
    }
}

export default EventHandlingClass
