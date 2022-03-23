import React, { useState } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { useHistory } from "react-router-dom";

const Week = (props) => {
  const my_lists = props.list;
  // const my_states = props.state;

  const score = [0, 1, 2, 3, 4];
  let history = useHistory();

  const [state, setState] = useState(() => {
    let initialState = [1, 1, 1, 1, 1, 1, 1];
    for (let i = 0; i < initialState.length; i++) {
      initialState[i] = Math.floor(Math.random() * 5);
    }
    const states = initialState.map((item) => {
      let check = [false, false, false, false, false];
      for (let i = 0; i < 5; i++) {
        check[i] = i <= item ? true : false;
      }
      return check;
    });
    return states;
  });
  
  return (
    <div>
      <h2>이번주 어땠나요?</h2>
      <ListStyle>
        {my_lists.map((list, index) => {
          return (
            <ItemStyle key={index}>
              {list}
              <CircleWrap>
                {score.map((el, idx) => { 
                  console.log(el, state[index])
                  return (<Circle 
                            key={idx} 
                            completed={state[index][idx]}></Circle>
                  );
                })}
              </CircleWrap>
              <Button onClick={() => {
              const day = my_lists[index]
              history.push("/Review/"+day);
            }}></Button>
            </ItemStyle>
          );
        })}
      </ListStyle>
    </div>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;

const CircleWrap = styled.div`
  display: flex;
  margin-left: 7px;
`;

const Circle = styled.div`
  width: 30px; 
  height: 30px;
  background-color: ${(props) => (props.completed ? "orange" : "#ddd")};
  margin: 5px;
  border-radius: 50%;
`;

const Button = styled.div`
  width: 0; 
  height: 0;
  margin-left: 5px;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 30px solid #303030;
  // border-right: 0px solid transparent;
  &:hover{
    cursor: pointer;
  }
`;


export default Week;