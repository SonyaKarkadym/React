import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";

class FullUser extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                full user
            </div>
        );
    }
}

export default withRouter(FullUser);