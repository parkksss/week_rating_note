import React from "react"; 
import logo from './logo.svg';
import styled from "styled-components";
import { Route, useParams } from 'react-router-dom';

import Week from "./Week"
import Review from "./Review"

function App() {


  const list = ['월', '화', '수', '목', '금', '토', '일'];
  // const [list, setList] = React.useState(['월', '화', '수', '목', '금', '토', '일']);

  // const addBucketList = () => {
  //   setList([...list]);
  // }

  return (
    <AppWrap className="App">
      <Container>
        <Route path="/" exact>
          <Week list={list}/>
        </Route>
        <Route path="/review/:day">
          <Review list={list} />
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
