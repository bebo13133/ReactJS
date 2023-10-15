import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ToDoList } from './components/ToDoList';
import { ToDoContext } from './contexts/ToDoContext';
import { AddToDo } from './components/AddToDoModal';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = 'http://localhost:3030/jsonstore/todos'


function App() {
    const [todoItem, setTodoItem] = useState([])
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then(result => {
                setTodoItem(Object.values(result))
            });


    }, []);

    const addToDoSubmit = async (values) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)

        })

        const result = await response.json();
        setShowModal(false)
        setTodoItem(state => [...state, result])

    }
    const onShowModal = () => {

        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    const onToDoDelete = async (todoId) => {
        await fetch(`${baseUrl}/${todoId}`, { method: 'DELETE' })
        setTodoItem(state => state.filter(todo => todo._id !== todoId))
    }

    const onCompleteClick = async (todoId) => {

        const todo = todoItem.find(todo => todo._id === todoId)
        await fetch(`${baseUrl}/${todoId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...todo, isComplete: !todo.isComplete })
        })
        setTodoItem(state => state.map(todo => todo._id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo))
    }

    const contextContainer = {

        onToDoDelete,
        onCompleteClick
    }

    return (
        <ToDoContext.Provider value={contextContainer}>
            <div>
                <Header />
                <ToDoList todoItem={todoItem} onShowModal={onShowModal} />

                <AddToDo addToDoSubmit={addToDoSubmit} show={showModal} closeModal={closeModal} />
            </div>
        </ToDoContext.Provider>
    );
}

export default App;
