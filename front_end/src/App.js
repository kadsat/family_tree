//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';


function Person({person}) {
  // isClicked state is used by the user to display the children from
  // a particular family, if there are any.
  const [isClicked, setClicked] = useState(false);

  let name   = person.name;
  let spouse = person.spouse;

  return (
    <ul>
      <div className='card'>
        <p>{name}</p>
        <p>{spouse}</p>
        <button onClick={() => setClicked(!isClicked)}>children</button>
      </div>
      {
        //  shorthand conditional to see if children attribute is present
        //  and if the user clicked on the expand/children button
        isClicked && 'children' in person? 
          person.children.map(
            (child,index) => {
              return !!child ? <li><Person person={child} key={index}/></li> : null;
            }
          )
        : 
        null
      }
    </ul>
  );
}

function App() {
  const [person, setPerson] = useState({});

  useEffect(() => {
      fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(person => setPerson(person));
    },[]
  );

  return (
    <li>
      <Person person={person} key={123}/>
    </li>
  );
}

export default App;