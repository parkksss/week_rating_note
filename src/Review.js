import React from 'react';
import styled from  'styled-components';

import { useHistory, useParams } from "react-router-dom";

const Review = (props) => {
  // const my_lists = props.list;
  const day = useParams();
  let history = useHistory();
  return (
    <div>
      <h2><Day>{day.day}</Day>  평점 남기기</h2>
      <CircleWrap>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
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
  background-color: #ddd;
  margin: 5px;
  border-radius: 50%;
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
`;

export default Review;