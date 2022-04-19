import React from "react";

class RefsDemo extends React.Component {
    constructor(props) {
        super();
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCBRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        if (this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCBRef}/>
                <button onClick={this.clickHandler}>click</button>
            </>
        )
    }
}

export default RefsDemo