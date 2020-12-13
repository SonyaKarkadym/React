import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
    render() {
        const {item,match:{url},color} = this.props;
        return (
            <div style={{background: `#${Math.floor(color())}`}}>
                {item.id} - {item.name} - <Link to={url + "/" + item.id}>details</Link>
            </div>
        );
    }
}

export default withRouter(Comment);