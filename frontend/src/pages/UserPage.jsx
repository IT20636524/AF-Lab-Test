import React from "react";
import Card from "react-bootstrap/Card";
import Navigation from "../components/Navbar/Navbar";
import user from "../assets/user.png"

export default function UserPage() {
  return (
    <div>
      <Navigation />
      <div className="raw">
        <div className="">

        </div>
      </div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={user}
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
