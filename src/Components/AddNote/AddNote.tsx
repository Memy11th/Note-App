import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function AddNote() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return <>
    <Button  onClick={handleShow} variant="primary" className="floating-button">
      <FontAwesomeIcon icon={faPlus} />
    </Button>



<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title className='fw-bold'>New Note</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className='fw-semibold '>Note title</Form.Label>
      <Form.Control
        type="texr"
        placeholder="todo list"
        autoFocus
      />
    </Form.Group>
    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label className='fw-semibold'>Write your note content</Form.Label>
      <Form.Control  as="textarea"  rows={3} draggable={false} />
    </Form.Group>
  </Form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Add note
  </Button>
</Modal.Footer>
</Modal>
</>
}

export default AddNote;
