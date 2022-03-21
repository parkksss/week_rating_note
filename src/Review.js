import React from 'react';
import styled from  'styled-components';

import { useHistory } from "react-router-dom";

const Review = (props) => {

  let history = useHistory();
  return (
    <div>
      <h2>평점남기기</h2>
      <Button onClick={() => {
        history.push("/");
      }}>평점 남기기</Button>
    </div>
  );
};

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