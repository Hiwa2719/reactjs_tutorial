import React from 'react'


class UserGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let message
        if(this.state.isLoggedIn){
            message = <div>Welcome Hiwa</div>
        }else{
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>
    }
}

export default UserGreeting