import React, {Component} from 'react';
import PostService from "../../service/PostService";
import Post from "../Post/Post";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {

    postService = new PostService();

    state = {
        posts:[]
    }

    async componentDidMount(){
        const posts = await this.postService.posts();
        this.setState({posts})
    }

    randomColor = () => Math.random() * (999999 - 100000) + 100000;

    render() {
        const {posts} = this.state;
        const {match:{url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id} color = {this.randomColor}/>)
                }
                <hr/>
                <Switch>
                    <Route path = {url + "/:id"} render = {(props)=> {
                        const {match: {params: {id}}} = props;
                        return <FullPost postId={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    };
}

export default withRouter(Posts);