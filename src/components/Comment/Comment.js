import React, {Component} from 'react';
import {
    withRouter,
    Link
} from "react-router-dom";

class Comment extends Component {
    render() {
        const {item,match:{url}} = this.props;
        return (
            <div>
                {item.id} - {item.name} - <Link to={url + "/" + item.id}>details</Link>
            </div>
        );
    }
}

export default withRouter(Comment);