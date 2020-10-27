import React from 'react'
//https://youtu.be/rsBQj6X7UK8

const withCounter = (WrappedComponent, count) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        incrCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + count }
            })
        }
        render() {
            console.log(this.props.name);
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrCount}
                {... this.props}
            />
        }
    }
    return WithCounter
}
export default withCounter 