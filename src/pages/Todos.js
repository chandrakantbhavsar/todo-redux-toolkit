import React from 'react'
import {Table,Tooltip} from 'antd';
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';

const StyledTable = styled(Table)`
  width:500px;
  padding-top:20px;
`;

const StyledClosed = styled(CloseOutlined)`
  padding-left:10px;
  font-size:20px;
  cursor:pointer;
`;

const Todos = ({TotalTodos}) => {
  const dispatch = useDispatch();
  let dataSource = [];
  if(TotalTodos.length>0)
    dataSource = TotalTodos;

  const columns = [
    {
      title: 'To Do',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key:'id',
      render: (_, record) => {
        return (
          <Tooltip title="Delete">
            <StyledClosed onClick={() => dispatch(deleteTodo(record.id))} />
          </Tooltip>
        )
      }
    }
  ];

  return (
    <StyledTable dataSource={dataSource} columns={columns} locale={{ emptyText: 'No records found' }} />
  )
}

export default Todos