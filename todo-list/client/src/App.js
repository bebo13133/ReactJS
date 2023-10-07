
import Footer from './components/Footer'
import Headers from './components/Header';
import Loading from './components/Loading';
import TableRolls from './components/TableRolls';
import { useEffect, useState } from "react"
function App() {
    const [todos, setTodos] = useState([])
const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
            .then(res => res.json())
            .then(data => {
                const result = Object.keys(data).map(id => ({ id, ...data[id] }))

                setTodos(result);

                setIsLoading(false)

            })


    }, []);

    const todoStatus = (id) => {

        setTodos(oldState => oldState.map(todos => todos.id === id ? ({ ...todos, isCompleted: !todos.isCompleted }) : todos))
    }

    const onAdd = () => {
        const lastId = todos[todos.length - 1].id
        const text = prompt('Add new Task')

        const newState = {id: lastId + 1, text, isCompleted:false}
        setTodos(oldState => [newState,...oldState, ])
    }


    return (

        <div>
            <div className="App">

                <Headers />


                <main className="main">


                    <section className="todo-list-container">
                        <h1>Todo List</h1>

                        <div className="add-btn-container">
                            <button className="btn" onClick={onAdd}>+ Add new Todo</button>
                        </div>

                        <div className="table-wrapper">


                       
                            {isLoading ?
                             <Loading/> 
                            :
                             <TableRolls todos={todos} todoStatus={todoStatus} />}

                           
                        </div>
                    </section>
                </main>

                <Footer />

            </div>
        </div>
    );
}

export default App;
