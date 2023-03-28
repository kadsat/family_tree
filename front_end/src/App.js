//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function Person(props) {
  /* 
    isClicked state is used by the user to display the children from
    a particular family, if there are any.
  */
  const [isClicked, setClicked] = useState(false);

  let name   = props.person.name;
  let spouse = props.person.spouse;

  return (
    <>
      <div className='card'>
        <p>{name}</p>
        <p>{spouse}</p>
        <button onClick={() => setClicked(!isClicked)}>children</button>
      </div>
      <ul>
        {
          /*
            shorthand conditional to see if children attribute is present
            and if the user clicked on the expand/children button
          */
          isClicked && 'children' in props.person? 
            props.person.children.map(
              (child) => {
                return !!child ? <li><Person person={child} /></li> : null;
              }
            )
          : 
          null
        }
      </ul>
    </>
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
    <Person person={person}/>
  );
}

export default App;