//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

function Person(props) {
  const [isClicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(true);
  }
  let name   = props.state.name;
  let spouse = props.state.spouse;
  return (
    <>
      <p>{name}</p>
      <p>{spouse}</p>
      <button onClick={handleClick}>children</button>
      <div style={{textIndent: '40px'}}>
        {isClicked? <Person state={props.state.children[0]}/>: null}
      </div>
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
    <div>
      <Person state={person}/>
    </div>
  );
}

export default App;
