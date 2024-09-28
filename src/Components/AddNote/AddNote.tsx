import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useFormik } from 'formik';
import FormikNotesAll from '../../interfaces/addNote'; // Make sure this interface has the correct properties
import axios from 'axios';
import { userNotes } from "../../Atoms/userAtom";
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

function AddNote() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [UserNotes, setUserNotes] = useRecoilState(userNotes);
  const navigate = useNavigate();

  const formik = useFormik<FormikNotesAll>({
    initialValues: {
      title: '',
      content: ''
    },
    onSubmit: handleSubmit,
  });

  async function handleSubmit(formikValues: FormikNotesAll) {
    try {
      const response = await axios.post('https://note-sigma-black.vercel.app/api/v1/notes', formikValues, {
        headers: {
          token: `3b8ny__${localStorage.getItem("UserTokenNotes")}`
        }
      });
      
      // Update user notes state
      setUserNotes(response.data.notes);
      navigate('/profile');
      handleClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error adding note:", error);
    }
  }

  return (
    <>
      <Button onClick={handleShow} variant="primary" className="floating-button">
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold'>New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fw-semibold'>Note title</Form.Label>
              <Form.Control
                type="text"
                placeholder="todo list"
                autoFocus
                id='title'
                name='title'
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className='fw-semibold'>Write your note content</Form.Label>
              <Form.Control
                type='text'
                id='content'
                name='content'
                as="textarea"
                rows={3}
                draggable={false}
                value={formik.values.content}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" >
                Add note
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddNote;
