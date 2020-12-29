import React, {Component} from 'react';
import Users from "./Users";

class App extends Component {

    state = {
        users:[],
        inputValue: '',
        user: null,
        disable: false
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(users => {
                this.setState({users})
            })
    }

    inputMain = React.createRef();

    onInputFill = () => {
        if(+this.inputMain.current.value <= 0 || +this.inputMain.current.value > 10) {
            this.setState({disabled: true})
        }
        else {
            this.setState({disabled: false})
        }
        this.setState({inputValue: this.inputMain.current.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    chosenUser = (inputValue) => {
        let {users} = this.state;
        let filter = users.find(value => value.id === +inputValue);
        this.setState({user: filter})
    }

    render() {
        let {inputValue,disabled, user} = this.state;
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <input ref = {this.inputMain} type={"number"} onInput={this.onInputFill} value={inputValue}/>
                <button disabled={disabled} onClick={()=>this.chosenUser(inputValue)}>send</button>
                </form>
                {
                    user && <h2>{user.name}</h2>
                }
            </div>
        );
    }
}

export default App;