import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

export const ToDoItems = ({
    text,
    isComplete,
    _id

}) => {
const {onToDoDelete} =useContext(ToDoContext)


    return (
        <div>
            <ListGroup.Item action href="#link1" style={{display:"flex", justifyContent:"space-between"}}>
                {text}
                <Button onClick={()=>onToDoDelete(_id)} variant="danger">X</Button>{' '}
            </ListGroup.Item>

        </div>


    )
}