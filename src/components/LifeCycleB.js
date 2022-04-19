import React from "react";


class LifeCycleB extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: 'hello'
        }
        console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(){
        console.log('lifeCycleB getDerivedStateFromProps')
        return null
    }
    render() {
        console.log('LifeCycleB render')
        return <div>Life Cycle</div>
    }
    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }
}

export default LifeCycleB