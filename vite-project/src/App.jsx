import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Header from "./header/index.jsx";
import {Menubar} from "primereact/menubar";
import Form from "./form/index.jsx";

function App() {

    const [livros, setLivros] = useState([]);
    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:3002/livros');
        setLivros(response.data);
    }
    useEffect(() => {
        fetchAPI();
    }, []);

  return (
    <>
        <Header />
     <h2 className="text-2xl text-slate-800 underline">teste</h2>
        {livros.map((livro, index) => (
            <div key={index}>
                <h3>{livro.titulo}</h3>
                <p>{livro.autor}</p>
            </div>
        ))}
<div className='w-5/12 flex'>
        <Form action='localhost:3002/livros' method='POST'/>
</div>
    </>
  )
}

export default App
