import React from 'react'


class UserGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return this.state.isLoggedIn && <div>Welcome Hiwa</div>  //this approach works only when we have one side
        // return this.state.isLoggedIn ?
        //     <div>Welcome Hiwa</div> :
        //     <div>Welcome Guest</div>
    }
}

export default UserGreeting