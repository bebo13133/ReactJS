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


function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    userService.getAll()
      .then(users =>{

        setUsers(users)
      setFilteredUsers(users)
  })
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
//? Search for users
  const handleSearch = (searchQuery, selectedCriteria) => {

    if (searchQuery.trim() === '' && selectedCriteria === 'all') {
    
      setFilteredUsers(users)
    } else {
      const filteredResults = users.filter((user) => {
        const query = searchQuery.toLowerCase();
        const firstNameMatch = selectedCriteria === 'firstName' && user.firstName.toLowerCase().includes(query);
        const lastNameMatch = selectedCriteria === 'lastName' && user.lastName.toLowerCase().includes(query);
        const emailMatch = selectedCriteria === 'email' && user.email.toLowerCase().includes(query);
        const phoneMatch = selectedCriteria === 'phone' && user.phoneNumber.toLowerCase().includes(query);
  
        return firstNameMatch || lastNameMatch || emailMatch || phoneMatch;
      });

      setFilteredUsers(filteredResults);
  

      if (filteredResults.length === 0 ) {
        setFilteredUsers([]);
      }
    }
    console.log(searchQuery)
  };
  
  
  






  return (
    <Fragment>
      <Header />
      <main className="main">

        {isLoading && <Loading />}



        <section className="card users-container">

          <SearchForm onSearch={handleSearch} />

       <TableComponent users={users}
        
            onUserCreateSubmit={onUserCreateSubmit}
            onUserDelete={onUserDelete}
            onEditUser={onEditUser} filteredUsers={filteredUsers} />
          
         

          <Pagination />
        </section>




      </main>

      <Footer />

    </Fragment>
  );
}

export default App;
