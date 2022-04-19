import React from "react";
import Input from './Input'

class FocusInput extends React.Component {
    constructor(props) {
        super();
        this.inputComponentRef = React.createRef()
    }

    clickHandler = () => {
        console.log(this.inputComponentRef)
        this.inputComponentRef.current.focusInput()
    }

    render() {
        return (
            <>
                <Input ref={this.inputComponentRef}/>
                <button onClick={this.clickHandler}>Focus on input</button>
            </>
        )
    }
}

export default FocusInput