//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';


import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';

function Person({person}) {
  //const [isClicked, setClicked] = useState(false);

  let name   = person.name;
  let spouse = person.spouse;

  /*
  const handleClick = () => {
    setClicked(!isClicked)
  }
  */

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
      <div className='tree-node'>
        <div className='card'>
          <p>{name}</p>
          <p>{spouse}</p>
          {/* <button onClick={handleClick}>children</button> */}
        </div>
      </div>
      {
        //isClicked && 
        'children' in person && 
        <div className='tree-node-children'>
          {person.children.map(recurseDisplay)}
        </div>
      }
    </ul>
  );
}

export default function App() {
  const [person, setPerson] = useState({});

  useEffect(() => {
      fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(person => setPerson(person))
        .catch(() => console.error());
    },[]
  );

  return (
    <>
      <div className='container'>
        <div className='slide'>
          <div className='tree'>
            {
              Object.keys(person).length > 0 && 
              <li><Person person={person} key={'root-id'}/></li>
            }
          </div>
        </div>
      </div>
    </>
  );
}