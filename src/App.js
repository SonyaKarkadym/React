import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

class App extends Component {
    render() {
        return (
              <Router>
                <div>
                  <ul>
                    <li>
                      <Link to = {"/users"}>to users page </Link>
                    </li>
                      <li>
                          <Link to={"/posts"}>to posts page</Link>
                      </li>
                      <li>
                          <Link to={"/comments"}>to comments page</Link>
                      </li>
                  </ul>

                  <Switch>
                    <Route path = {"/users"} render = {(props)=>{
                        return <Users/>
                    }}/>
                    <Route path = {"/posts"} render = {(props) =>{
                        return <Posts/>
                    }}/>
                    <Route path = {"/comments"} render={(props)=>{
                    return <Comments/>
                    }}/>
                  </Switch>
                </div>
              </Router>
        );
    };
}

export default App;