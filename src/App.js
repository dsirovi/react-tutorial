import React, {useState, Component} from "react";
import './App.css';
import Person from './Person/Person';

class App extends Component {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    state = {
        persons: [
            {id: 'asd1', name: 'Max', age: 28},
            {id: 'asd2', name: 'Manu', age: 22},
            {id: 'asd3', name: 'Michele', age: 21}
        ],
        otherValue: 'Some value',
        showPersons: false
    };


    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1);
        this.setState({persons: persons});

    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        // eslint-disable-next-line react-hooks/rules-of-hooks
        this.setState({
            persons: persons
        })
    }


    render() {
        const buttonStyle = {
            background: 'white',
            font: 'inherit',
            border: '1px solid black',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person name={person.name}
                                       age={person.age}
                                       click={() => this.deletePersonHandler(index)}
                                       key={person.id}
                                       changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                    {/*<Person name={this.state.persons[0].name}
                            age={this.state.persons[0].age}/>
                    <Person click={this.switchNameHandler.bind(this, 'Trash')}
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            changed={this.nameChangeHandler}
                    >My hobbies: Racing</Person>
                    <Person name={this.state.persons[2].name}
                            age={this.state.persons[2].age}/>*/}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                {/*Do not use to often*/}
                <button style={buttonStyle}
                        onClick={this.togglePersonsHandler}>Toggle persons
                </button>
                {persons}
            </div>
        );
    }
}


export default App;
