import ListGroup from 'react-bootstrap/ListGroup';
import { ToDoItems } from '../components/ToDo';

export const ToDoList = ({
    todoItem,
}) => {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };
    return (


        <div style={{ width: '30%', margin: "30px auto" }}>
            <h1>Todo List</h1>
            <ListGroup>
                {todoItem.map(x => <ToDoItems key={x._id}{...x} />)}

                <ListGroup.Item action onClick={alertClicked}>
                    This one is a button
                </ListGroup.Item>
            </ListGroup>

        </div>

    );
}