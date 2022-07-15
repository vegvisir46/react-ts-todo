import React from 'react';
import {Box} from '@mui/material';

import {Header, Panel, TodoList} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box display='flex' flexDirection='column' width='500px'>
        <Header/>
        <Panel/>
        <TodoList/>
      </Box>
    </div>
  );
}

export default App;
