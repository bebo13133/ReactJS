import TodoList from './TodoList'

export default function TableRolls({
    todos,
    todoStatus
}) {

    return (

        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>

                {todos.map(todo => (<TodoList key={todo.id} {...todo} todoStatus={todoStatus} />


                ))}
            </tbody>
        </table>

    )

}