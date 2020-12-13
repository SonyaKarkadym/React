import React, {Component} from 'react';
import CommentService from "../../service/CommentService";
import Comment from "../Comment/Comment";
import {Route, Switch, withRouter} from "react-router-dom";
import FullComment from "../FullComment/FullComment";


class Comments extends Component {

    commentService = new CommentService();

    state = {
        comments : []
    }

    async componentDidMount(){
        const comments = await this.commentService.comments();
        this.setState({comments})
    }

    render() {
        const {comments} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    <Route path = {url + "/:id"} render = { (props) => {
                        const {match:{params:{id}}} = props;
                        return <FullComment commentId = {id} key = {id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>

        );
    };
}

export default withRouter(Comments);