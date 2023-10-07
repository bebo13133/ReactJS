

export default function TodoList({
    id,
    isCompleted,
    text,
    todoStatus
}) {

    return (

        <tr key={id} className={`${isCompleted ? "is-completed" : "todo"}`}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : "Not Complete"}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => todoStatus(id)}>Change status</button>
            </td>
        </tr>

    )
}