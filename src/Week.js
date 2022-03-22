import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { useHistory } from "react-router-dom";

const Week = (props) => {
  const my_lists = props.list;
  let history = useHistory();

  return (
    <div>
      <h2>이번주 어땠나요?</h2>
      <ListStyle>
        {my_lists.map((list, index) => {
          return (
            <ItemStyle key={index}>
              {list}
              <CircleWrap>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
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
  background-color: #ddd;
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