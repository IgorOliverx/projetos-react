
'use client';


import { useState, useEffect } from 'react';


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [status, setStatus] = useState([]);


  useEffect(() => {
    fetchTodos();
  }, []);




  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();
    console.log(data);
    setTodos(data.data);
  };


  const addTodo = async () => {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTodo }),
    });
    const data = await response.json();
    setTodos([...todos, data.data]);
    setNewTodo('');
  };


  const deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const updateTodo = async (id) => {
    await fetch(`/api/todos/${id}`, {
      method: 'PUT',
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  }


  return (
      <div className='w-screen h-96 bg-slate-100 shadow-md'>
        <h1>To-Do List</h1>
        <input
            className='w-80 h-12 bg-slate-200 text-black underline'
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo} className='bg-blue-600 w-56 text-white h-12 rounded'>Adicionar Tarefa</button>
        <div className='w-full flex bg-slate-300'>
          <ul className='flex flex-wrap flex-row gap-20'>
            {todos.map((todo) => (
                <li key={todo._id} className='w-full flex px-20 justify-between'>
                  <p className='text-black text-lg'>{todo.title}</p>
                  <p className='text-black text-lg'>{todo.completed}</p>
                  <button className='text-red-600 underline ml-20' onClick={() => deleteTodo(todo._id)}>Excluir</button>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
}

