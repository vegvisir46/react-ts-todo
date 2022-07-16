import React from 'react';
import {Add as AddIcon} from '@mui/icons-material';
import {Button, Paper, TextField} from '@mui/material';

import type {Todo} from "../../App";

const DEFAULT_TODO = {name: '', description: ''};

interface PanelProps {
  onAddTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void
}

export const Panel: React.FC<PanelProps> = ({onAddTodo}) => {
  const [todo, setTodo] = React.useState(DEFAULT_TODO);

  const onAddClick = () => {
    onAddTodo(todo);
    setTodo(DEFAULT_TODO);
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    console.log('@@@', value, name);
    setTodo({...todo, [name]: value});
  }


  return (
    <Paper elevation={2}
           sx={{
             width: '100%',
             padding: '25px 30px',
             borderRadius: 2,
             display: 'flex',
             justifyContent: 'space-between',
             alignContent: 'center',
             gap: 2
           }}>
      <TextField value={todo.name}
                 onChange={onChange}
                 name='name'
                 label='Name'
                 sx={{width: '300px'}}/>
      <TextField value={todo.description}
                 onChange={onChange}
                 name='description'
                 label='Description'
                 sx={{width: '300px'}}/>
      <Button startIcon={<AddIcon/>}
              onClick={onAddClick}
              variant="outlined">
        Todo
      </Button>
    </Paper>
  )
};