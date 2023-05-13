import {createContext, useState, useContext} from 'react';

const LibraryContext = createContext();

const LibraryProvider = ({children}) => {
    const [books, setBooks] = useState([
      { id: 1, title: "Book1", author: "Author 1", publicationDate: "2021-10-10",availableCopies: 10},
      { id: 2, title: "Book2", author: "Author 2", publicationDate: "2021-10-10",availableCopies: 10},
      { id: 3, title: "Book3", author: "Author 3", publicationDate: "2021-10-10",availableCopies: 10},
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
      publicationDate,
      availableCopies
    ) => {
      try {
        const updatedBook = {
          title,
          author,
          publicationDate,
          availableCopies,
        };
        console.log(updatedBook);

        const updatedBooks = books.map((book) => {
          if (book.title === title) {
            return updatedBook;
          }
          return book;
        });
        
        setBooks(updatedBooks);
        console.log(updatedBooks);
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


    const viewOneBook = async(title) => {
      setBooks(books.filter((book) => book.title === title));
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