import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

export const ToDoItems = ({
    text,
    isComplete,
    _id,
}) => {
const {onToDoDelete, onCompleteClick} =useContext(ToDoContext)


    return (
        <div>
            <ListGroup.Item action style={{display:"flex", justifyContent:"space-between"}} onClick={()=>onCompleteClick(_id)}>
               <p style={{textDecoration: isComplete ? "line-through red ": "none"}} >{text}</p> 
                <Button onClick={()=>onToDoDelete(_id)} variant="danger">X</Button>{' '}
            </ListGroup.Item>

        </div>


    )
}