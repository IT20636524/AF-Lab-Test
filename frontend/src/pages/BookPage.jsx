import Card from "react-bootstrap/Card";
import Navigation from "../components/Navbar/Navbar";
import bookimg from "../assets/book.jpg";
import AddBookModel from "../components/Model/AddBookModel";
import { LibraryState } from "../context/libraryProvider.jsx";
import { Button } from "react-bootstrap";
import UpdateBookModel from "../components/Model/UpdateBookModel";

export default function BookPage() {
    const { books, updateBook, deleteBook } = LibraryState();
      const handleDeleteBook = async (btitle) => {
        console.log(btitle);
        await deleteBook(btitle).then(() => {
          alert("Book deleted successfully");
        });
      };

  return (
    <div>
      <Navigation />
      <br />
      <br />
      <br />
      <div className="overflow-hidden">
        <h1 className="text-center">Books</h1>
        <div className="text-center">
          <AddBookModel />
        </div>
        <br />
        <div className="row p-3">
          {books.map((book) => (
            <div className="col-sm-5">
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  className="mx-auto"
                  variant="top"
                  src={bookimg}
                  style={{ width: "100px", height: "100px" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{book.title}</Card.Title>
                </Card.Body>
                <Card.Body className="text-center">
                  <Card.Link href="#">
                    <UpdateBookModel
                      title={book.title}
                      author={book.author}
                      publication_date={book.publication_date}
                      available_copies={book.available_copies}
                    />
                  </Card.Link>
                  <Card.Link href="#">
                    <Button onClick={() => handleDeleteBook(book.title)}>
                      <i className="fas fa-trash-alt text-danger"></i>
                    </Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
