import React from "react";


class HoverCounterTwo extends React.Component{

    render() {
        const {count, incrementCounter} = this.props
        return(
            <div onMouseOver={incrementCounter}>
                Hovered over {count} times
            </div>
        )
    }
}

export default HoverCounterTwo