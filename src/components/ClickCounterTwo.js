import React from "react";

class ClickCounterTwo extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
