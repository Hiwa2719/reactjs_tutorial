import React from "react";
import F from './F'
import UserContext from "./userContext";

class E extends React.Component{
    render() {
        return (
            <div>
                Component E context : {this.context}
                <F/>
            </div>)
    }
}

E.contextType = UserContext

export default E