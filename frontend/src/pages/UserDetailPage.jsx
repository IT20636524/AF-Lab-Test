import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Navigation from "../components/Navbar/Navbar";
import user from "../assets/user.png";

export default function UserDetailPage() {
  return (
    <div>
      <Navigation />
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={user}
          style={{ width: "100px", height: "100px" }}
        />
        <Card.Body>
          <Card.Title>Prathibha</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
