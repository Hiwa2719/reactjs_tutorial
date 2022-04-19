import React from "react";
import withCounter from "./withCounter";


class HoverCounter extends React.Component {

    render() {
        const {count, incrementCount} = this.props
        return <div onMouseOver={incrementCount}>{this.props.name} Hovered {count} times</div>
    }
}

export default withCounter(HoverCounter, 10)
