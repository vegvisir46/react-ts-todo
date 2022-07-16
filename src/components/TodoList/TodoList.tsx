import React from 'react';
import {Box} from "@mui/material";
import {TodoItem} from "./TodoItem/TodoItem";
import type {Todo} from "../../App";

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckTodo: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({todoList, onDeleteTodo, onCheckTodo}) => {
  return (
    <Box>{
      todoList.map((todo) => {
        return (
          <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onCheckTodo={onCheckTodo}/>
        )
      })
    }

    </Box>
  )
};