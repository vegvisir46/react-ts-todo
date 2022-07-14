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
           sx={{padding: '15px 30px',
                borderRadius: 2,
                display: 'flex',

                alignContent: 'center',
                gap: 2 }}>
      <TextField value={inputValue}
                 onChange={onChange}
                 label='Todo name'/>
      <Button startIcon={<AddIcon />}
              onClick={onAddClick}
              variant="outlined">
        Add Todo
      </Button>
    </Paper>
  )
};