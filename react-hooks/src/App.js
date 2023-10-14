import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ToDoList } from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = 'http://localhost:3030/jsonstore/todos'


function App() {
    const [ todoItem, setTodoItem ] = useState([])

    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then(result => {
                setTodoItem(Object.values(result))
            });


    },[]);




    return (
        <div>
            <Header />
            <ToDoList todoItem={todoItem} />
        </div>

    );
}

export default App;
