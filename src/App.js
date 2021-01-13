import React, {useState} from "react";
import './App.css';
import Person from './Person/Person';

const app = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 22},
            {name: 'Michele', age: 21}
        ],
        otherValue: 'Some value'
    });

    console.log(personsState);

    const switchNameHandler = (newName) => {
        console.log('Was clicked!');
        // DO NOT DO THIS: personsState.persons[0].name = 'Maximilian';
        setPersonsState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 22},
                {name: 'Michele', age: 33}
            ]
        })
    };

    const nameChangeHandler = (event) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setPersonsState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 22},
                {name: 'Michele', age: 21}
            ]
        })
    }

    const buttonStyle = {
        background: 'white',
        font: 'inherit',
        border: '1px solid black',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div className="App">
            <h1>Hi, I'm React App</h1>
            {/*Do not use to often*/}
            <button style={buttonStyle}
                    onClick={() => switchNameHandler('Willllly')}>Switch Name
            </button>
            <Person name={personsState.persons[0].name}
                    age={personsState.persons[0].age}/>
            <Person click={switchNameHandler.bind(this, 'Trash')}
                    name={personsState.persons[1].name}
                    age={personsState.persons[1].age}
                    changed={nameChangeHandler}
            >My hobbies: Racing</Person>
            <Person name={personsState.persons[2].name}
                    age={personsState.persons[2].age}/>
        </div>
    );
}


export default app;
