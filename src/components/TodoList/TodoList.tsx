import React from 'react';
import {Box} from "@mui/material";
import {TodoItem} from "./TodoItem/TodoItem";
import type {Todo} from "../../App";

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckTodo: (id: Todo['id']) => void;
  onEdit: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({todoList, onDeleteTodo, onCheckTodo, onEdit}) => {
  return (
    <Box>{
      todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onCheckTodo={onCheckTodo}
            onEdit={onEdit}/>
        )
      })
    }

    </Box>
  )
};