import React from "react";

class ClickCounterTwo extends React.Component {

    render() {
        const {count, incrementCounter} = this.props
        return (
            <div>
                <button onClick={incrementCounter}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
