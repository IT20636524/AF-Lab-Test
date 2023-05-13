import React from "react";
import Navigation from "../components/Navbar/Navbar";
import { Table, Badge, Image, Button } from "react-bootstrap";
import { LibraryState } from "../context/libraryProvider.jsx";

export default function Home() {
  const { books } = LibraryState();
  const { users } = LibraryState();

  return (
    <div>
      <Navigation />
      <br />
      <br />
      <br />
      <h2>Users</h2>
      <div className="m-3">
        <Table responsive bordered hover className="mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>
                  <div className="d-flex align-items-center">{user.name}</div>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br />
      </div>
      <br />
      <h2>Books</h2>
      <div className="m-3">
        <Table responsive bordered hover className="mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Title</th>
              <th>Auther</th>
              <th>Publication date</th>
              <th>Available copies</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publicationDate}</td>
                <td>{book.availableCopies}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br />
      </div>
    </div>
  );
}
