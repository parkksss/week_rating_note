import React from "react"; 
// import React, { useState } from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import { Route, useParams } from 'react-router-dom';

import Week from "./Week"
import Review from "./Review"

function App() {

  const list = ['월', '화', '수', '목', '금', '토', '일']; 

  // const [state, setState] = useState(() => {
  //   let initialState = [1, 1, 1, 1, 1, 1, 1];
  //   for (let i = 0; i < initialState.length; i++) {
  //     initialState[i] = Math.floor(Math.random() * 5);
  //   }
  //   const states = initialState.map((item) => {
  //     let check = [false, false, false, false, false];
  //     for (let i = 0; i < 5; i++) {
  //       check[i] = i <= item ? true : false;
  //     }
  //     return check;
  //   });
  //   return states;
  // });

  return (
    <AppWrap className="App">
      <Container>
        <Route path="/" exact>
          <Week list={list}/>
        </Route>
        <Route path="/review/:day">
          <Review list={list}/>
        </Route>
      </Container>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Container = styled.div`
  max-width: 350px;
  width: 60vw;
  height: 65vh;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;  

`;

export default App;
