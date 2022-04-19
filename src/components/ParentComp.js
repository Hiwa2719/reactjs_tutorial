import React from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

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
        console.log('parent rendering')
        return(
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                {/*<RegComp name={this.state.name}/>*/}
                {/*<PureComp name={this.state.name}/>*/}
            </div>
        )
    }
}


export default ParentComp