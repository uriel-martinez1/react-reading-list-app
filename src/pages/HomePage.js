import { useState, useContext } from "react"; // we need to import the useState and useContext hooks
import { BookContext } from "../store/BookContext"; // we also need to import the BookContext data store
import BookCard from "../components/BookCard"; // need to import the book card component
import './HomePage.css';

const HomePage = () => {
    const { books } = useContext(BookContext); // need to store all the current books from the store
    const [filter, setFilter] = useState('all'); // we need to manage the filter state -- default value is 'all'

    // Filter the books based on the selected filter
    const filteredBooks = books.filter((book) => {
        if (filter === 'all') return true;
        if (filter === 'best' && book.bestSeller) return true;
        if (filter === 'new' && book.newRelease) return true;
        return false;
    });

    return (
        <div>
            {/**This is filtering what will be shown */}
            <h2>All Books</h2>
            <section>
                <label>
                    All
                    <input
                        type="radio"
                        name="filter"
                        value="all"
                        checked={filter === 'all'}
                        onChange={() => setFilter('all')}
                    />
                </label> | <label>
                    Best Sellers
                    <input
                        type="radio"
                        name="filter"
                        value="best"
                        checked={filter === 'best'}
                        onChange={() => setFilter('best')}
                    />
                </label> | <label>
                    New Releases
                    <input
                        type="radio"
                        name="filter"
                        value="new"
                        checked={filter === 'new'}
                        onChange={() => setFilter('new')}
                    />
                </label>
            </section>

            {/**This is where the card component gets rendered */}
            <section className="book-list">
                {filteredBooks.map((book) => (
                    <BookCard key={book.isbn} book={book}>
                        <button>Add to Reading List</button>
                    </BookCard>
                ))}
            </section>
        </div>
    )
};

export default HomePage;