import React from "react";


class EventBind extends React.Component{
    constructor() {
        super();
        this.state = {
            message: 'hello'
        }
        // this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     this.setState({
    //         message: 'goodbye'
    //     })
    // }
    changeMessage = () => {
        this.setState({
            message: 'goodbye'
        })
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.changeMessage.bind(this)}>Click</button>*/}
                {/*<button onClick={() => this.changeMessage()}>Click</button>*/}
                {/*<button onClick={this.changeMessage}>Click</button>*/}

            </div>
        )
    }
}

export default EventBind