import React from 'react';
import {IconButton, Box, Button, Paper, Typography} from "@mui/material";
import {Delete as DeleteIcon} from '@mui/icons-material';

import type {Todo} from "../../../App";


interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckTodo: (id: Todo['id']) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, onDeleteTodo, onCheckTodo}) => {
  return (
    <Paper elevation={2}
           sx={{
             marginTop: '15px',
             width: '100%',
             padding: '10px 28px',
             borderRadius: 2,
             display: 'flex',
             justifyContent: 'space-between',
             alignContent: 'center',
             gap: 2,
             opacity: todo.checked ? 0.5 : 1,
             transition: 'all .3s ease'
           }}>
      <Box textAlign='left'>
        <Typography sx={{cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none'}}
                    variant="h5"
                    component="h5"
                    gutterBottom
          onClick={() => onCheckTodo(todo.id)}
        >{todo.name}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          {todo.description}
        </Typography>
      </Box>

      <Box>
        <IconButton onClick={() => onDeleteTodo(todo.id)} aria-label='delete' color='error'>
          <DeleteIcon/>
        </IconButton>
        {/*<Button>b2</Button>*/}
      </Box>

    </Paper>
  );
};