import Details from "./Details";
import User from "./User";
import { Fragment, useState } from "react";
import * as UserService from "../services/UserService"
import UserCreate from "./UserCreate";
import DeleteUser from "./DeleteUser";

export default function TableComponent({

    onUserCreateSubmit,
    users,
    onUserDelete,
    onEditUser,
    filteredUsers

}) {
    const [selectedUser, setSelectedUser] = useState(null)
    const [selectedDeleteUser, setSelectedDeleteUser] = useState(null)
    const [showEditUser, setShowEditUser] = useState(null)

    const [showUser, setShowUser] = useState(false)
    const [showDeleteUser, setShowDeleteUser] = useState(false)

    //?Sort the users
    const [sortOrder, setSortOrder] = useState('asc')
    const [sortedColumn, setSortedColumn] = useState(null)

    const onInfo = async (userId) => {
        const user = await UserService.getOne(userId)

        if (user) setSelectedUser(user)
    }

    const onClose = () => {
        setSelectedUser(null)
        setShowUser(false)
        setShowDeleteUser(false)
        setShowEditUser(null)
    }

    const onShowAddClick = () => {
        setShowUser(true)

    }

    const onUserSubmitHandler = (e) => {
        onUserCreateSubmit(e);
        setShowUser(false);
    }

    const onDeleteClick = (userId) => {
        setSelectedDeleteUser({ _id: userId });
        setShowDeleteUser(true)

    }
    const deleteHandler = () => {
        onUserDelete(selectedDeleteUser._id)
        console.log(selectedDeleteUser._id)
        onClose()

    }
    const onEditClick = async (userId) => {

        const user = await UserService.getOne(userId)
        setShowEditUser(user)
    }
    const onEditSubmitHandler = (e, userId) => {
        onEditUser(e, userId);
        setShowEditUser(false);
    }

    //? Sorted

    const handleSortClick = (columnName) => {

        if (sortedColumn === columnName) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")

        } else {
            setSortedColumn(columnName)
            setSortOrder('asc')
        }
    };

    const sortedUsers = [...users].sort((a, b) => {
        if (sortOrder === 'asc') {
         return a.phoneNumber.localeCompare(b.phoneNumber);
  } else {
    // Sort in descending order
    return b.phoneNumber.localeCompare(a.phoneNumber);
  }
    })


    return (

        <Fragment>


            {selectedUser && <Details {...selectedUser} onClose={onClose} />}
            {showUser && <UserCreate onClose={onClose} onUserCreateSubmit={onUserSubmitHandler} />}
            {showDeleteUser && <DeleteUser onClose={onClose} onUserDelete={deleteHandler} />}
            {showEditUser && <UserCreate onClose={onClose} user={showEditUser} onUserCreateSubmit={onEditSubmitHandler} />}

            <div className="table-wrapper">


     

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th onClick={() => handleSortClick('firstName')}>
                                {sortedColumn === "firstName" && (
                                    <i className={`fa fa-arrow-${sortOrder === "asc" ? "up" : "down"}`} />
                                )}
                                First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    {/* <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path> */}
                                </svg>
                            </th>
                            <th onClick={() => handleSortClick('lastName')}>
                                   {sortedColumn === "lastName" && (
                                    <i className={`fa fa-arrow-${sortOrder === "asc" ? "up" : "down"}`} />
                                )}
                                Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    {/* <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path> */}
                                </svg>
                            </th>
                            <th onClick={() => handleSortClick('email')}>
                                   {sortedColumn === "email" && (
                                    <i className={`fa fa-arrow-${sortOrder === "asc" ? "up" : "down"}`} />
                                )}
                                Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    {/* <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path> */}
                                </svg>
                            </th>
                            <th onClick={() => handleSortClick('Phone')}>
                                   {sortedColumn === "Phone" && (
                                    <i className={`fa fa-arrow-${sortOrder === "asc" ? "up" : "down"}`} />
                                )}
                                Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    {/* <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path> */}
                                </svg>
                            </th>
                            <th onClick={() => handleSortClick('created')}>
                                   {sortedColumn === "created" && (
                                    <i className={`fa fa-arrow-${sortOrder === "asc" ? "up" : "down"}`} />
                                )}
                                Created
                                <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    {/* <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path> */}
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? filteredUsers.map(user => <User {...user} {...user}
                            key={user._id}
                            onInfo={onInfo}
                            onDeleteClick={onDeleteClick}
                            onEditClick={onEditClick} />) : sortedUsers.map(user => <User
                                {...user}
                                key={user._id}
                                onInfo={onInfo}
                                onDeleteClick={onDeleteClick}
                                onEditClick={onEditClick}
                            />)}

                    </tbody>
                </table>
            </div>
            <button className="btn-add btn" onClick={onShowAddClick}>Add new user</button>

        </Fragment>
    )
}