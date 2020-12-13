import React, {Component} from 'react';
import {
    withRouter,
    Link
} from "react-router-dom";

class Post extends Component {
    render() {
        const {item,match:{url}} = this.props;
        return (
            <div>
                {item.id}-{item.title}-<Link to={url + "/" + item.id}>info</Link>
            </div>
        );
    }
}

export default withRouter(Post);