import React from "react";
import axios from "axios";


class PostForm extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: '',
            title: '',
            body: '',
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log('success')
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {userId, title, body} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type="text" name='userId' value={userId} onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type="text" name='title' value={title} onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type="text" name='body' value={body} onChange={this.changeHandler}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default PostForm
