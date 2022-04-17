import React from "react";


class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor',
            buttonText: 'Subscribe'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thanks for subscribing',
            buttonText: 'Subscribed'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default Message
