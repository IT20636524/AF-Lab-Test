import React from 'react'

export default function BookDetailPage() {
  return (
    <div>
      <Navigation />
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={book}
          style={{ width: "100px", height: "100px" }}
        />
        <Card.Body>
          <Card.Title>Prathibha</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">
            <i className="fas fa-edit"></i>
          </Card.Link>
          <Card.Link href="#">
            <i className="fas fa-trash-alt"></i>
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={user}
          style={{ width: "100px", height: "100px" }}
        />
        <Card.Body>
          <Card.Title>Dinushika</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">
            <i className="fas fa-edit"></i>
          </Card.Link>
          <Card.Link href="#">
            <i className="fas fa-trash-alt"></i>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
