import React from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hiwa'
        }
        console.log('LifeCycle constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifeCycle getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifecycle componentDidMount')
    }

    render() {
        console.log('lifecycle render')
        return (
            <LifeCycleB/>
        )
    }
}

export default LifeCycle