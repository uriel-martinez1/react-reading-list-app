import { useContext } from "react";
import { ReadingListContext } from "../store/ReadingListContext";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

import './ReadingList.css';

const ReadingListPage = () => {
    const { readingList, setReadingStatus, removeFromReadingList } = useContext(ReadingListContext);

    return (
        <>
            <h2>Reading List</h2>
            <section className="book-container">
                {readingList.map((book) => (
                    <Link key={book.isbn} to={`/book/${book.isbn}`}>
                        <BookCard key={book.isbn} book={book}>
                            <div className="button-container">
                                <button onClick={(e) => {e.preventDefault(); setReadingStatus(book, true);}}>
                                    {book.read ? 'Mark Unread' : 'Mark Read'}
                                </button>
                                <button onClick={(e) => {e.preventDefault(); removeFromReadingList(book); alert('Removed from reading list');}}>
                                    Remove
                                </button>
                            </div>
                        </BookCard>
                    </Link>
                ))}
            </section>

            <Link to='/newBook'>Add Book to Reading List</Link>
        </>
    );
};

export default ReadingListPage;