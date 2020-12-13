import React, {Component} from 'react';
import UserService from "../../service/UserService";

class FullUser extends Component {

    userService = new UserService();

    state = {
        user:null
    }

    async componentDidMount() {
        const {userId} = this.props;
        const user = await this.userService.user(userId);
        this.setState({user})
    }

    render() {
        const {user} = this.state;

        return (
            <div>
                {user && <div>{user.id}-{user.name}-{user.email}</div>}

            </div>
        );
    }
}

export default FullUser;