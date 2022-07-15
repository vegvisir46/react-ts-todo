import React from 'react';
import {Box} from "@mui/material";

const todoList = [
  {id: 1, description: 'test', checked: false},
  {id: 2, description: 'test', checked: false},
  {
    id: 3,
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    checked: false
  }
]
export const TodoList = () => {
  return (
    <Box>{
      todoList.map((todo) => {
        return (
          <Box>{todo.description}</Box>
        )
      })
    }</Box>
  )
};