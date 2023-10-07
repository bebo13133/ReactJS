
import Footer from './components/Footer'
import Headers from './components/Header';
import Loading from './components/Loading';
import TableRolls from './components/TableRolls';
import{useEffect,useState} from "react"
function App() {
const [todos, setTodos] = useState([])


useEffect(() => {
  fetch(`http://localhost:3030/jsonstore/todos`)
  .then(res=> res.json())
  .then(data=> {
const result = Object.keys(data).map(id =>({id, ...data[id]}))

setTodos(result);

console.log(result)

  })


},[])
  return (

    <div>
    <div className="App">

      <Headers />


  <main className="main">


    <section className="todo-list-container">
      <h1>Todo List</h1>

      <div className="add-btn-container">
        <button className="btn">+ Add new Todo</button>
      </div>

      <div className="table-wrapper">

 
       {/* <Loading/> */}

 <TableRolls todos={todos}/>
      </div>
    </section>
  </main>

<Footer />

    </div>
    </div>
  );
}

export default App;
