import React from 'react';
import {Box} from '@mui/material';

import {Header, Panel, TodoList} from './components';
import './App.css';

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

function App() {
  const [editTodoId, setEditTodoId] = React.useState<number | null>(null);
  const [todoList, setTodoList] = React.useState([
    {id: 1, name: 'task 1', description: 'test', checked: true},
    {id: 2, name: 'task 2', description: 'test', checked: false},
    {
      id: 3, name: 'task 3',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      checked: false
    }
  ]);

  const onAddTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList([
      ...todoList,
      {id: todoList[todoList.length - 1].id + 1, description, name, checked: false}
    ])
  };

  const onEdit = (id: Todo['id']) => {
    setEditTodoId(id);
  };

  const onDeleteTodo = (id: Todo['id']) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  };

  const onCheckTodo = (id: Todo['id']) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === id) {
        return {...todo, checked: !todo.checked}
      }
      return todo
    }));
  };

  const onChangeTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === editTodoId) {
        return {...todo, name, description}
      }
      return todo
    }));
    setEditTodoId(null);
  };

  return (
    <div className="App">
      <Box display='flex' flexDirection='column' width='500px'>
        <Header/>
        <Panel onAddTodo={onAddTodo}/>
        <TodoList
          editTodoId={editTodoId}
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onEdit={onEdit}
          onChangeTodo={onChangeTodo}/>
      </Box>
    </div>
  );
}

export default App;
