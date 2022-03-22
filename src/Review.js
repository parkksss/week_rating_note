// import React from 'react';
import React, { useState } from 'react';
import styled from  'styled-components';

import { useHistory, useParams } from "react-router-dom";

const Review = (props) => {
  
  let history = useHistory();
  const day = useParams();
  const score = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  
  const handleScoreClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <div>
      <h2><Day>{day.day}요일</Day>  평점 남기기</h2>
      <CircleWrap>
        {score.map((el, idx) => {
          return (<Circle 
                    key={idx} 
                    completed={clicked[el]}
                    onClick={() => handleScoreClick(el)}></Circle>
          );
        })}
      </CircleWrap>
      <Button onClick={() => {
        history.push("/");
      }}>평점 남기기</Button>
    </div>
  );
};

const Day = styled.span`
  background-color: orange;
  border-radius: 5px;
  padding: 3px;
  color: white;
`;

const CircleWrap = styled.div`
  display: flex;
  margin-bottom: 30x;
  padding-bottom: 30px;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 30px; 
  height: 30px;
  background-color: ${(props) => (props.completed ? "orange" : "#ddd")};
  margin: 5px;
  border-radius: 50%;
  &:hover{
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 300px; 
  height: 50px;
  padding: 10px;
  color: white;
  background-color: #303030;
  border: 1px solid #303030;
  border-radius: 5px;
  font-size: 15px;
  &:hover{
    cursor: pointer;
  }
`;

export default Review;