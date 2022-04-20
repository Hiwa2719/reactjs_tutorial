import React from "react";
import {UserConsumer} from "./userContext";


class F extends React.Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <h1>Hello {username}</h1>
                    }
                }
            </UserConsumer>
        )
    }
}

export default F