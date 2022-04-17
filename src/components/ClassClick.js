import React from "react";


class ClassClick extends React.Component{
    clickHandler(){
        console.log('clicked')
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>class click</button>
            </div>
        )
    }
}

export default ClassClick