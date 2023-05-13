import {createContext, useState, useContext} from 'react';

const LibraryContext = createContext();

const LibraryProvider = ({children}) => {
    const [books, setBooks] = useState([
      { id: 1, title: "Book 1", author: "Author 1", publicationDate: "2021-10-10",availableCopies: 10},
      { id: 2, title: "Book 2", author: "Author 2", publicationDate: "2021-10-10",availableCopies: 10},
      { id: 3, title: "Book 3", author: "Author 3", publicationDate: "2021-10-10",availableCopies: 10},
    ]);

    const [users, setUsers] = useState([
      { id: 1, name: "User 1", email: "Email 1", phone: "111111" },
      { id: 2, name: "User 2", email: "Email 2", phone: "222222" },
      { id: 3, name: "User 3", email: "Email 3", phone: "333333" },
    ]);

    const addBook = (title, author, publicationDate, availableCopies) => {
      const newBook = { title, author, publicationDate, availableCopies };
      setBooks([...books, newBook]);
    };

    const updateBook = async (
      title,
      author,
      publication_date,
      available_copies
    ) => {
      try {
        const updatedBook = {
          title,
          author,
          publication_date,
          available_copies,
        };

        const updatedBooks = books.map((book) => {
          if (book.title === title) {
            return updatedBook;
          }
          return book;
        });

        setBooks(updatedBooks);
        console.log("Book updated successfully");
      } catch (error) {
        console.log("Failed to update book:", error);
      }
    };


    const deleteBook = async (title) => {
      try {
        const updatedBooks = books.filter((book) => book.title !== title);
        setBooks(updatedBooks);
        console.log("Book deleted successfully");
      } catch (error) {
        console.log("Failed to delete book:", error);
      }
    };


    const viewOneBook = (id) => {
      setBooks(books.filter((book) => book.id === id));
    };

    return (
      <LibraryContext.Provider
        value={{ books, setBooks, users, setUsers, addBook, updateBook, deleteBook, viewOneBook }}
      >
        {children}
      </LibraryContext.Provider>
    );
};

export const LibraryState = () => {
    return useContext(LibraryContext);
}

export default LibraryProvider;