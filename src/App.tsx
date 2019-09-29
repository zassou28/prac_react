import React, { useState, useCallback } from 'react';
import { createStore } from 'redux';
import './App.css';
import styled from 'styled-components';

// styled-component
const Title = styled.h1`
  color: gray;
`;

const App: React.FC = () => {

  const [first_name, changeFirst] = useState("");
  const [last_name, changeTLast] = useState("");

  const resetName = () => {
    changeFirst("");
    changeTLast("");
  };
  
  const changeF = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      changeFirst(event.target.value)
    },
    [first_name]
  )
  const changeL = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      changeTLast(event.target.value)
    },
    [last_name]
  )

  return (
    <div className="App">
      <Title>練習</Title>
      <input placeholder="FirstName" value={first_name} onChange={changeF}></input>
      <br/>
      <input placeholder="LastName" value={last_name} onChange={changeL}></input>
      <br/>
      <button onClick={resetName}>push</button>
      <br/>
      <p>FirstName : {first_name}</p>
      <p>LastName : {last_name}</p>

    </div>
  );
}

export default App;
