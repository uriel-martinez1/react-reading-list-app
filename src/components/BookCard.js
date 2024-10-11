import React from "react";
import './BookCard.css';
import bookCover from '../assets/images/bookStockImage.jpg'; // set the path for the image

const BookCard = ({ book, children }) => {
    return (
        <div className={`card ${book.read ? 'read' : ''}`}>
            <h2 className="book-title">{book.title}</h2>
                <img
                    className="image"
                    src={bookCover}
                    alt={book.title}
                />
            <h3 className="book-author">{book.author}</h3>
            {children}
        </div>
    );
};

export default BookCard;