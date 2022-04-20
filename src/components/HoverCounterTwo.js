import React from "react";


class HoverCounterTwo extends React.Component{
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    incrementCounter = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    render() {
        return(
            <div onMouseOver={this.incrementCounter}>
                Hovered over {this.state.count} times
            </div>
        )
    }
}

export default HoverCounterTwo