//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function Person(props) {
  const [isClicked, setClicked] = useState(false);
  let name   = props.state.name;
  let spouse = props.state.spouse;
  //{isClicked? <Person state={props.state.children[0]}/>: null}
  return (
    <div className='App'>
      <p>{name}</p>
      <p>{spouse}</p>
      <button onClick={() => setClicked(!isClicked)}>children</button>
      <div style={{textIndent: '40'}}>
        {
          isClicked? 
            props.state.children.map(
              (child) => <Person state={child}/>
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