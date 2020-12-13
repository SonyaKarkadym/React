import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {
    render() {
        const {item,match:{url},color} = this.props;
        return (
            <div style={{background: `#${Math.floor(color())}`}}>
                {item.id}-{item.title}-<Link to={url + "/" + item.id}>info</Link>
            </div>
        );
    }
}

export default withRouter(Post);