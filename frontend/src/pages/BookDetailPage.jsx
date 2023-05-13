import React from 'react'
import Navigation from '../components/Navbar/Navbar';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import bookimg from "../assets/book.jpg";
import { useParams } from 'react-router-dom';
import { LibraryState } from '../context/libraryProvider';

export default function BookDetailPage() {
  const params = useParams();
  const title = params.title;
  const { books } = LibraryState();

  const book = books.find((book) => book.title === title);

  return (
    <div>
      <Navigation />
      <br />
      <br />
      <br />
      <h1>Book Detail Page</h1>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="mx-auto"
            variant="top"
            src={bookimg}
            style={{ width: "100px", height: "100px" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{book?.author}</ListGroup.Item>
            <ListGroup.Item>{book?.publicationDate}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}
