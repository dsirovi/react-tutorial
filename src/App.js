import React, {useState, Component} from "react";
import './App.css';
import Person from './Person/Person';

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
        username: 'Super Max'
    }

    usernameChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }

    render() {
        return (
            <div className="App">
                <UserInput changed={this.usernameChangeHandler} currentName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName="Max"/>
            </div>
        );
    }


}


export default App;
