import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { LibraryState } from "../../context/libraryProvider";

export default function UpdateBookModel(props) {
  const [show, setShow] = useState(false);
  const { updateBook } = LibraryState();
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [publication_date, setPublication_date] = useState(
    props.publication_date
  );
  const [available_copies, setAvailable_copies] = useState(
    props.available_copies
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    console.log(title, author, publication_date, available_copies);
    await updateBook(title, author, publication_date, available_copies).then(
      () => {
        alert("Book updated successfully");
        setShow(false);
      }
    );
  };

  return (
    <div>
      <Button className="m-1" variant="warning" onClick={handleShow}>
        <i className="fas fa-edit text-success"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                onChange={(e) => setAuthor(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Publication Date</Form.Label>
              <Form.Control
                type="Date"
                onChange={(e) => setPublication_date(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Available Copies </Form.Label>
              <Form.Control
                type="number"
                placeholder="Numer Of Available Copies"
                onChange={(e) => setAvailable_copies(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleUpdateBook}>
              Edit Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
