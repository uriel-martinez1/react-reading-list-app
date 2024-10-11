import { useContext } from "react";
import { ReadingListContext } from "../store/ReadingListContext";
import BookCard from "../components/BookCard";
import './ReadingList.css';
const ReadingListPage = () => {
    const { readingList, setReadStatus, removeFromReadingList } = useContext(ReadingListContext);

    return (
        <div>
            <h2>Reading List</h2>
            <div className="book-container">
                {readingList.map((book) => (
                    <BookCard key={book.isbn} book={book}>
                        <div className="button-container">
                            <button onClick={() => setReadStatus(book.isbn, !book.read)}>
                                {book.read ? 'Mark Unread' : 'Mark Read'}
                            </button>
                            <button onClick={() => removeFromReadingList(book)}>
                                Remove
                            </button>
                        </div>
                    </BookCard>
                ))}
            </div>
        </div>
    );
};

export default ReadingListPage;