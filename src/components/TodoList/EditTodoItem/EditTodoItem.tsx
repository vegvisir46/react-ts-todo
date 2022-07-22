import React from 'react';
import {Button, Paper, TextField} from "@mui/material";
import {Edit as EditIcon} from '@mui/icons-material';

import type {Todo} from "../../../App";


interface EditTodoItemProps {
  todo: Todo;
  onChangeTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({todo, onChangeTodo}) => {
  const [editTodo, setEditTodo] = React.useState({name: todo.name, description: todo.description})

  const onAddClick = () => {
    onChangeTodo(editTodo);
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setEditTodo({...todo, [name]: value});
  }

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
             transition: 'all .3s ease'
           }}>

      <TextField value={editTodo.name}
                 onChange={onChange}
                 name='name'
                 label='Name'
                 sx={{width: '300px'}}/>
      <TextField value={editTodo.description}
                 onChange={onChange}
                 name='description'
                 label='Description'
                 sx={{width: '300px'}}/>
      <Button startIcon={<EditIcon/>}
              onClick={onAddClick}
              variant="outlined">
        EDIT
      </Button>

    </Paper>
  );
};