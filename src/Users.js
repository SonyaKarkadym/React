import React, {Component} from 'react';
import User from "./User";

class Users extends Component {

    render() {
        let {users} = this.props;
        return (
            <div>
                {users.name}
            </div>
        );
    }
}

export default Users;