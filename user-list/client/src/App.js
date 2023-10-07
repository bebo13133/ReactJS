import * as userService from './services/UserService'

import {Fragment, useState} from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TableComponent from './components/TableComponent';
import './App.css'
import Pagination from './components/Pagination';
import { useEffect } from 'react';

function App() {
const [users,setUsers] = useState([])
const [isLoading,setLoading] = useState(true)

useEffect(() =>{
      userService.getAll()
      .then(users=>
        
        setUsers(users)
      )
      .catch(err=>{
        console.log('Error' + err)
      })
      setLoading(false)
  },[])


  return (
    <Fragment>
      <Header />
      <main className="main">
      <section className="card users-container">

      <SearchForm/>

      
      <TableComponent users={users} isLoading={isLoading}/>
      <button className="btn-add btn">Add new user</button>

      <Pagination/>
      </section>




      </main>

    <Footer/>

    </Fragment>
  );
}

export default App;
