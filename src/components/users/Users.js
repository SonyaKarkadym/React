import React, {Component} from 'react';
import UserService from "../../service/UserService";
import User from "../User/User";
import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import FullUser from "../FullUser/FullUser";


class Users extends Component {

    userService = new UserService();

    state = {
        users: []
    }

    async componentDidMount() {
        const users = await this.userService.users();
        this.setState({users})
    }

    render() {
        const {users} = this.state;
        const {match:{url}} = this.props;

        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                <hr/>
                    <Switch>
                        <Route path = {url + "/:id"} render = {(props) => {
                            const {match:{params:{id}}} = props;
                            return <FullUser userId = {id} key = {id}/>
                        }}/>
                    </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Users);