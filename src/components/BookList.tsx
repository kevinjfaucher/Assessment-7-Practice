import { useState } from 'react';
import BookRow from './BookRow';
import BookForm from './BookForm';
import { Book } from '../types/Book'; // Import the Book interface
import '../styles/BookList.css'; // Import the CSS file for styling

function BookList() {
  // Initial state with some sample books
  const [books, setBooks] = useState<Book[]>([
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { title: '1984', author: 'George Orwell' },
  ]);

  // Function to add a new book to the list
  const handleAddBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  // Function to clear the list of books
  const clearBooks = () => {
    setBooks([]);
  };

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <BookRow key={index} book={book} />
          ))}
        </tbody>
      </table>
      <button onClick={clearBooks}>Clear Books</button>
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default BookList;
