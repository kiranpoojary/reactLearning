import React, { Component } from 'react'

class SubmitFormClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            course: 'B.tech',
            feedback: ''
        }
    }

    nameChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    courseChangeHandler = (event) => {
        this.setState({
            course: event.target.value
        })

    }

    feedbackChangeHandler = (event) => {
        this.setState({
            feedback: event.target.value
        })
    }

    submitHandler = () => {

        alert(`${this.state.name} ${this.state.course} ${this.state.feedback}`)
    }

    render() {
        //const { name, course, feedback } = this.state    //No need to use this.state
        return (
            <form onSubmit={this.submitHandler}>
                Name : <input type="text" value={this.state.name} onChange={this.nameChangeHandler} />
                <br />
                Course :&nbsp;
                <select onChange={this.courseChangeHandler} value={this.state.course}>
                    <option value="B.tech">B.tech</option>
                    <option value="MCA">MCA</option>
                    <option value="M.tech">M.tech</option>
                </select>
                <br />
                <textarea value={this.state.feedback} onChange={this.feedbackChangeHandler} />
                <br />
                <button type="submit">SUBMIT</button>
            </form>
        )
    }
}

export default SubmitFormClass
