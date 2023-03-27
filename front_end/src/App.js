//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function Person(props) {
  /* 
    isClicked state is used by the user to display the children from
    a particular family, if there are any.
  */
  const [isClicked, setClicked] = useState(false);

  let name   = props.state.name;
  let spouse = props.state.spouse;

  return (
    <div className='parent'>
      <div className='contact-card'>
        <p>{name}</p>
        <p>{spouse}</p>
        <button onClick={() => setClicked(!isClicked)}>children</button>
      </div>
      <div className='child'>
        {
          /*
            shorthand conditional to see if children attribute is present
            and if the user clicked on the expand/children button
          */
          isClicked && 'children' in props.state? 
            props.state.children.map(
              (child) => !!child ? <Person state={child}/> : null
            )
          : 
          null
        }
      </div>
    </div>
  );
}


function App() {
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(person => setPerson(person));
  }, []);

  return (
    <div>
      <Person state={person}/>
    </div>
  );
}

export default App;