import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ToDoList } from './components/ToDoList';
import { AddToDo } from './components/AddToDoModal';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = 'http://localhost:3030/jsonstore/todos'


function App() {
    const [ todoItem, setTodoItem ] = useState([])
    const [ showModal,setShowModal]= useState(false)

    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then(result => {
                setTodoItem(Object.values(result))
            });


    },[]);

const addToDoSubmit = async (values) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(values)

    })

    const result = await response.json();
    console.log(result)

}
const onShowModal = () =>{

    setShowModal(true)
}


    return (
        <div>
            <Header />
            <ToDoList todoItem={todoItem} onShowModal={onShowModal}/>

            <AddToDo addToDoSubmit={addToDoSubmit} show={showModal}/>
        </div>

    );
}

export default App;
