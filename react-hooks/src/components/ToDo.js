import ListGroup from 'react-bootstrap/ListGroup';

export const ToDoItems = ({
    text,
    isComplete,

}) => {
    return (
        <div>
            <ListGroup.Item action href="#link1">
                {text}
            </ListGroup.Item>

        </div>


    )
}