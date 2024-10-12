import { useContext } from "react";
import { ReadingListContext } from "../store/ReadingListContext";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const NewBookPage = () => {
    // grab the book from the reading list 
    const { readingListBooks, setReadingStatus, removeFromReadingList } = useContext(ReadingListContext);

    // we need a way to filter the books
    return (
        <>
            <h2>Add Book</h2>
        </>
    );
};

export default NewBookPage;