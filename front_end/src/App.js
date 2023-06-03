//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';


function Person({person}) {
  // isClicked state is used by the user to display the children from
  // a particular family, if there are any.
  const [isClicked, setClicked] = useState(false);

  let name   = person.name;
  let spouse = person.spouse;

  const handleClick = () => {
    setClicked(!isClicked)
  }

  const recurseDisplay = (child, index) => {
    if (!!child){
      return (
        <li>
          <Person 
            key={index}
            person={child}
          />
        </li>
      );
    }
    else {
      return null;
    }
  }

  return (
    <ul>
      <div className='card'>
        <p>{name}</p>
        <p>{spouse}</p>
        <button onClick={handleClick}>children</button>
      </div>
      {
        isClicked && 'children' in person && person.children.map(recurseDisplay)
      }
    </ul>
  );
}

export default function App() {
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