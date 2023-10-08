import * as userService from './services/UserService'

import { Fragment, useState } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TableComponent from './components/TableComponent';
import './App.css'
import Pagination from './components/Pagination';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    userService.getAll()
      .then(users =>

        setUsers(users)
      )
      .catch(err => {
        console.log('Error' + err)
      })
    setLoading(false)
  }, []);

  const onUserCreateSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = Object.fromEntries(formData)

    const createUser = await userService.createUser(data)

    setUsers(users => [...users, createUser])
  }


  const onUserDelete = async (userId) => {
    await userService.deleteUser(userId)
    setUsers(state => state.filter(u => u._id !== userId))

  }

  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="card users-container">

          <SearchForm />


          <TableComponent users={users}
            isLoading={isLoading}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserDelete={onUserDelete} />

          <Pagination />
        </section>




      </main>

      <Footer />

    </Fragment>
  );
}

export default App;
