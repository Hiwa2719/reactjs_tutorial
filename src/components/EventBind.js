import React from "react";


class EventBind extends React.Component{
    constructor() {
        super();
        this.state = {
            message: 'hello'
        }
    }

    changeMessage(){
        this.setState({
            message: 'goodbye'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.changeMessage.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind