import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useForm } from '../hooks/useForm';


export const AddToDo = ({
    addToDoSubmit,
    show
}) => {
    const { formValues, onChangeHandler, onSubmit } = useForm({ text: ''}, addToDoSubmit);



    return (

      
            <Modal show={show}>
                <Form onSubmit={onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Todo</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Todo</Form.Label>
                            <Form.Control type="text" name="text" placeholder="Enter todos" values={formValues.name} onChange={onChangeHandler} />
                            <Form.Text className="text-muted">
                                Add your todo ...
                            </Form.Text>
                        </Form.Group>




                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
   
    );


}