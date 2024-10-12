import { useState, useContext } from "react";
import { ReadingListContext } from "../store/ReadingListContext";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const NewBookPage = () => {
    // grab the book from the reading list 
    const { readingListBooks } = useContext(ReadingListContext);

    // we need a way to filter the books
    return (
        <>
            <h2>Reading List</h2>
            <section>
                <BookCard>
                </BookCard>
            </section>
        </>
    );
};

export default NewBookPage;