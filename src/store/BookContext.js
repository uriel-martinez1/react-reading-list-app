// we need to import the use state and the createContext hook
import React, { useState, createContext, useMemo } from "react";

// create the context
export const BookContext = createContext();

// create a provider component
export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([
        {
            title: "The Testaments",
            author: "Margaret Atwood",
            bestSeller: true,
            newRelease: true,
            isbn: "9780385543781",
            numPages: 432,
            moreInfoLink: "https://en.wikipedia.org/wiki/The_Testaments"
        },
        {
            title: "Normal People",
            author: "Sally Rooney",
            bestSeller: false,
            newRelease: true,
            isbn: "9781984822178",
            numPages: 266,
            moreInfoLink: "https://en.wikipedia.org/wiki/Normal_People"
        },
        {
            title: "Where the Forest Meets the Stars",
            author: "Glendy Vanderah",
            bestSeller: false,
            newRelease: true,
            isbn: "9781542040068",
            numPages: 333,
            moreInfoLink: "https://www.goodreads.com/book/show/40545956-where-the-forest-meets-the-stars"
        },
        {
            title: "Talking to Strangers",
            author: "Malcolm Gladwell",
            bestSeller: true,
            newRelease: false,
            isbn: "9780316478526",
            numPages: 400,
            moreInfoLink: "https://en.wikipedia.org/wiki/Talking_to_Strangers"
        },
        {
            title: "Embrace Your Weird",
            author: "Felicia Day",
            bestSeller: true,
            newRelease: false,
            isbn: "9781982113223",
            numPages: 272,
            moreInfoLink: "http://www.feliciadaybook.com/"
        },
        {
            title: "Recursion",
            author: "Blake Crouch",
            bestSeller: false,
            newRelease: true,
            isbn: "9781524759780",
            numPages: 336,
            moreInfoLink: "https://www.goodreads.com/book/show/42046112-recursion"

        },
        {
            title: "This Is How You Lose the Time War",
            author: "Amal El-Mohtar",
            bestSeller: false,
            newRelease: true,
            isbn: "9781534431003",
            numPages: 209,
            moreInfoLink: "https://www.goodreads.com/en/book/show/43352954"
        },
        {
            title: "Flatland",
            author: "Edwin A. Abbott",
            bestSeller: true,
            newRelease: false,
            isbn: "048627263X",
            numPages: 96,
            moreInfoLink: "https://en.wikipedia.org/wiki/Flatland"
        },
        {
            title: "Things Fall Apart",
            author: "Chinua Achebe",
            bestSeller: true,
            newRelease: false,
            isbn: "9780449208106",
            numPages: 209,
            moreInfoLink: "https://www.penguinrandomhouse.com/books/565351/things-fall-apart-by-chinua-achebe/"
        },
        {
            title: "Kafka on the Shore",
            author: "Haruki Murakami",
            read: false,
            isbn: "9781784877989",
            numPages: 505,
            moreInfoLink: "https://en.wikipedia.org/wiki/Kafka_on_the_Shore",
            bestSeller: false,
            newRelease: true,
        },
        {
            title: "The Girl With All the Gifts",
            author: "M.R. Carey",
            read: true,
            isbn: "9780356500157",
            bestSeller: false,
            newRelease: true,
            numPages: 460,
            moreInfoLink: "https://en.wikipedia.org/wiki/The_Girl_with_All_the_Gifts"
        },
        {
            title: "The Old Man and the Sea",
            author: "Ernest Hemingway",
            read: true,
            isbn: "9780684830490",
            numPages: 127,
            bestSeller: false,
            newRelease: true,
            moreInfoLink: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea"
        },
        {
            title: "Le Petit Prince",
            author: "Antoine de Saint-Exupéry",
            read: false,
            isbn: "9783125971400",
            numPages: 96,
            bestSeller: false,
            newRelease: true,
            moreInfoLink: "https://en.wikipedia.org/wiki/The_Little_Prince"
        }
    ]);

    const setReadingStatus = (isbn, value) => {
        setBooks((prevBooks) => 
            prevBooks.map((book) => 
                book.isbn === isbn ? {...book, read: value} : book
            )
        );
    };

    const addBook = (newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };

    const sortedBooks = useMemo(() => {
        return [...books].sort((a,b) => a.title.localeCompare(b.title));
    }, [books]);


    return (
        <BookContext.Provider value={{books, sortedBooks,setReadingStatus, addBook}}>
            {children}
        </BookContext.Provider>
    )
}