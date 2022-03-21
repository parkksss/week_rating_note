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
              <Button onClick={() => {
              const day = my_lists[index]
              // console.log(day)
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
  padding: 16px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  // margin: 8px;
  // background-color: aliceblue;
`;


const Button = styled.div`
  width: 0; 
  height: 0;
  margin-left: 10px;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 30px solid #303030;
  border-right: 30px solid transparent;
`;


export default Week;