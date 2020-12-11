import React, {Component} from 'react';
import UserService from "../service/UserService";
import User from "../User/User";
import "./AllUsers.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import FullUser from "../full-user/FullUser";

class AllUsers extends Component {
    state = {
        users:[]
    }

    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users})
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>

жЖйф!




                users.map(value => <User item={value} key = {value.id}/>)
                }
                <div className={"all-users-router"}>
                    <Switch>
                        <Route path = {`${url}/:xxx`} exact = {true} render = {(props)=> {
                            let {match:{params:{xxx}}} = props;
                            return <FullUser id = {xxx}/>;
                        }
                        }/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);