import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
  const toggleButtonRef = useRef(null);


  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    /*let timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);*/
    toggleButtonRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLenght <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLenght <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
