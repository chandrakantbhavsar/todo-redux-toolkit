import React, { useState } from "react";
import { Input,Tooltip } from "antd";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const StyledInput = styled(Input)`
  width: 200px;
  vertical-align: top;
`;

const StyledPlus = styled(PlusOutlined)`
  padding-left:10px;
  padding-top: 3px;
  font-size:25px;
  cursor:pointer;
`;

const AddTodo = ({TotalTodos}) => {
  const [myTodo, setmyTodo] = useState("");
  const dispatch = useDispatch();
  
  const insertTodo = () => {
    if (myTodo !== '' && !TotalTodos.some(todo => todo.name === myTodo)) {
      dispatch(addTodo(myTodo));
      setmyTodo("");
    }
  };

  return (
    <>
      <StyledInput 
          placeholder="Add ToDos" 
          value={myTodo} 
          onChange={(e) => setmyTodo(e.target.value)} 
      />
      <Tooltip title="Add">
        <StyledPlus onClick={insertTodo} />
      </Tooltip>
    </>
  );
};

export default AddTodo;
