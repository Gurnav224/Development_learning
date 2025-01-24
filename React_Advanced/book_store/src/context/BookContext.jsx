/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import useLocalStroage from "../custom_hooks/useLocalStroage";

import { useState } from "react";

const BookContext = createContext();

const useBook = () => useContext(BookContext);

export default useBook;

export function BookProvider({ children }) {
  const initialBooks = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      status: "read",
    },
    {
      title: "1984",
      author: "George Orwell",
      status: "unread",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      status: "read",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      status: "read",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      status: "unread",
    },
  ];

  const { value: books, setValue } = useLocalStroage("books", initialBooks);
  const [filtered, setFiltered] = useState(books);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    status: "",
  });

  function filterBooks(selectedStatus) {
    setFiltered(
      selectedStatus
        ? books.filter((book) => book.status === selectedStatus)
        : books
    );
    setValue(books);
  }

  function toggleBookStatus(title) {
    const toggledbooks = books.map((book) => {
      if (book.title === title) {
        return {
          ...book,
          status: book.status === "read" ? "unread" : "read",
        };
      }
      return book;
    });
    setFiltered(toggledbooks);
    setValue(toggledbooks);
  }

  function handleAddBook(e) {
    e.preventDefault();
    setValue((prev) => [...prev, newBook]);
    setFiltered((prev) => [...prev, newBook]);
    setNewBook({
      title: "",
      author: "",
      status: "",
    });
  }

  function deleteBook(title) {
    const booksAfterDelete = books.filter((book) => book.title !== title);
    setFiltered(booksAfterDelete);
    setValue(booksAfterDelete);
  }

  return (
    <BookContext.Provider
      value={{
        filterBooks,
        filtered,
        toggleBookStatus,
        handleAddBook,
        newBook,
        setNewBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
