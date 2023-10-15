import ListGroup from 'react-bootstrap/ListGroup';
import { ToDoItems } from '../components/ToDo';
import Button from 'react-bootstrap/Button';

export const ToDoList = ({
    todoItem,
    onShowModal
}) => {
    // const alertClicked = () => {
    //     alert('You clicked the third ListGroupItem');
    // };
    return (


        <div style={{ width: '30%', margin: "30px auto" }}>
            <h1>Todo List</h1>
            <ListGroup>
                {todoItem.map(x => <ToDoItems key={x._id}{...x} />)}


            <Button onClick={onShowModal} style={{color:"white", borderColor: "red", margin: "20px 100px",backgroundColor:"#384257"}}variant="add">Add</Button>{' '}

            </ListGroup>

        </div>

    );
}