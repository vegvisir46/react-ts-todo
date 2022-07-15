import React from 'react';
import {Add as AddIcon } from '@mui/icons-material';
import {Button, Paper, TextField} from '@mui/material';

export const Panel = () => {
  const [inputValue, setInputValue] = React.useState('');

  const onAddClick = () => {
    console.log('@', inputValue)
    setInputValue('');
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setInputValue(value);
  }


  return (
    <Paper elevation={2}
           sx={{width: '100%',
                padding: '25px 30px',
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                gap: 2 }}>
      <TextField value={inputValue}
                 onChange={onChange}
                 name='name'
                 label='Name'
                 sx={{width: '300px'}}/>
      <TextField value={inputValue}
                 onChange={onChange}
                 name='description'
                 label='Description'
                 sx={{width: '300px'}}/>
      <Button startIcon={<AddIcon />}
              onClick={onAddClick}
              variant="outlined">
        Todo
      </Button>
    </Paper>
  )
};