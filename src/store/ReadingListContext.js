import { useState, createContext, useMemo } from "react";

export const ReadingListContext = createContext();

export const ReadingListProvider = ({children}) => {
    const [readingList, setReadingList] = useState([
        {
            title: "Kafka on the Shore",
            author: "Haruki Murakami",
            read: false,
            isbn: "9781784877989",
            numPages: 505,
            moreInfoLink: "https://en.wikipedia.org/wiki/Kafka_on_the_Shore"
          },
          {
            title: "The Girl With All the Gifts",
            author: "M.R. Carey",
            read: true,
            isbn: "9780356500157",
            numPages: 460,
            moreInfoLink: "https://en.wikipedia.org/wiki/The_Girl_with_All_the_Gifts"
          },
          {
            title: "The Old Man and the Sea",
            author: "Ernest Hemingway",
            read: true,
            isbn: "9780684830490",
            numPages: 127,
            moreInfoLink: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea"
          },
          {
            title: "Le Petit Prince",
            author: "Antoine de Saint-Exupéry",
            read: false,
            isbn: "9783125971400",
            numPages: 96,
            moreInfoLink: "https://en.wikipedia.org/wiki/The_Little_Prince"
          }
    ]);

    const addToReadingList = (newBook) => {
        if (!readingList.some((b) => b.isbn === newBook.isbn)) {
            setReadingList([...readingList, {newBook, read:false}]);
        }
    };

    const removeFromReadingList = (book) => {
        setReadingList(readingList.filter((b) => b.isbn !== book.isbn));
    };

    const sortedReadingList = useMemo(() => {
        return [...readingList].sort((a,b) => a.title.localeCompare(b.title));
    }, [readingList]);

    return (
        <ReadingListContext.Provider value={{readingList, sortedReadingList,addToReadingList, removeFromReadingList}}>
            {children}
        </ReadingListContext.Provider>
    );
};