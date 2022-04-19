import React from "react";


class Form extends React.Component{
    constructor(props) {
        super();
        this.state = {
            username: '',
            text: '',
            topic: 'react',
        }
    }
    handleUsernameChange  = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleTextChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.text} ${this.state.topic}`)
        event.preventDefault()
    }
     render(){
        const {username, text, topic} = this.state
         return(
             <form onSubmit={this.handleSubmit}>
                 <div>
                     <label htmlFor="">Username</label>
                     <input type="text" value={username} onChange={this.handleUsernameChange}/>
                 </div>
                 <div>
                     <label htmlFor="">Comments</label>
                     <textarea name="" id="" cols="30" rows="10" value={text} onChange={this.handleTextChange}></textarea>
                 </div>
                <div>
                    <label htmlFor="">Topic</label>
                    <select name="" id="" value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                 <button type="submit">Submit</button>
             </form>
         )
     }
}

export default Form