import React from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends React.Component{
    constructor(props) {
        super();
        this.state = {
            name: 'Hiwa'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Hiwa'
            })
        }, 2000)
    }

    render(){
        return(
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}


export default ParentComp