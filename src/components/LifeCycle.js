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

    static getDerivedStateFromProps(props, state) {
        console.log('lifeCycle getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifecycle componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycle shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycle getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('lifecycle componentDidUpdate')
    }
    changeState = event => {
        this.setState({
            name: 'karen'
        })
    }
    render() {
        console.log('lifecycle render')
        return (
            <div>
                <div>LifeCycle</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycle