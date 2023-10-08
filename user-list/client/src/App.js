import * as userService from './services/UserService'

import { Fragment, useState } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TableComponent from './components/TableComponent';
import './App.css'
import Pagination from './components/Pagination';
import { useEffect } from 'react';
import Loading from './components/Loading';
import SearchResult from './components/SearchResult'

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [filteredUsers, setFilteredUsers] = useState([]);

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

  const onEditUser = async (e, userId) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    const editUser = await userService.updateUser(data, userId)

    setUsers(state => state.map(x => x._id === userId ? editUser : x));
  }

  const handleSearch = (searchQuery, selectedCriteria) => {
    // Filter users based on the selected criteria and search query
    const filteredResults = users.filter((user) => {
      if (selectedCriteria === 'firstName') {
        return user.firstName.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (selectedCriteria === 'lastName') {
        return user.lastName.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (selectedCriteria === 'email') {
        return user.email.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (selectedCriteria === 'phone') {
        return user.phone.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
    setFilteredUsers(filteredResults);
  };






  return (
    <Fragment>
      <Header />
      <main className="main">

        {isLoading && <Loading />}



        <section className="card users-container">

          <SearchForm onSearch={handleSearch} />

      
            {filteredUsers.length > 0  ? filteredUsers.map(user => <SearchResult {...user} />) :  <TableComponent users={users}
            isLoading={isLoading}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserDelete={onUserDelete}
            onEditUser={onEditUser} filteredUsers={filteredUsers} />}
          
         

          <Pagination />
        </section>




      </main>

      <Footer />

    </Fragment>
  );
}

export default App;
