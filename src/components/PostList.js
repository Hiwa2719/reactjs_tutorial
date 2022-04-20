import React from "react";
import axios from 'axios'

class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errorMsg: 'Error retrieving data'
                })
            })
    }

    render() {
        const {posts, errorMsg} = this.state
        return (
            <div>
                List of Posts:
                {
                    posts.length && posts.map(post => <h1 key={post.id}>{post.title}</h1>)
                }
                {errorMsg && <div>{errorMsg}</div>}
            </div>
        )
    }
}

export default PostList