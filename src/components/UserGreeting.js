import React from 'react'


class UserGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        if(this.state.isLoggedIn){
            return(
                <div>
                    Welcome Hiwa
                </div>
            )
        }else{
            return(
                <div>
                    Welcome Guest
                </div>
            )
        }
    }
}

export default UserGreeting