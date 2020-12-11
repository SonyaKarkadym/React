import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./App.css";
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComents from "./components/all-coments/AllComents";

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <div><Link to = {"/users"}>users</Link></div>
                <div><Link to = {"/posts"}>posts</Link></div>
                <div><Link to = {"/coments"}>coments</Link></div>
                <div className={"app-route"}>
                    <Switch>
                        <Route path = {"/users"} render = {(props)=>{
                            console.log(props)
                            return <AllUsers/>
                        }}>
                        </Route>
                        <Route path = {"/posts"}>
                            <AllPosts/>
                        </Route>
                        <Route path = {"/coments"}>
                            <AllComents/>
                        </Route>
                    </Switch>
                </div>

            </div>
            </Router>
        );
    }
}

export default App;