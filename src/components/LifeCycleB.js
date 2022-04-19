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
        return <div>Life CycleB</div>
    }
    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }
        shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('lifecycleB componentDidUpdate')
    }
}

export default LifeCycleB