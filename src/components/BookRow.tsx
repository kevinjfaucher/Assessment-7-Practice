import { Book } from '../types/Book'; // Import the Book interface

interface BookRowProps {
  book: Book;
}

function BookRow({ book }: BookRowProps) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
    </tr>
  );
}

export default BookRow;
