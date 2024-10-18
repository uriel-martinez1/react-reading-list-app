import { useState } from "react";
import { ReadingListContext } from "../store/ReadingListContext";
import './NewBookPage.css';

const NewBookPage = () => {
    // we need to store the new book
    const [inputs, setInputs] = useState({});

    // handle change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    // we need a way to filter the books
    return (
        <>
            <form className="new-page-form">
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={inputs.title || ""}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={inputs.author || ""}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="isbn"
                    placeholder="ISBN"
                    value={inputs.isbn || ""}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="num-pages"
                    placeholder="Num Pages"
                    value={inputs.numPages || ""}
                    onChange={handleChange}
                />

                <label>Best seller?</label>
                <input 
                    type="checkbox"
                    name="best-seller"
                />
                <label>New release?</label>
                <input 
                    type="checkbox"
                    name="new-release"
                />
                <input 
                    type="text"
                    name="more-info"
                    placeholder="More Info Link"
                    value={inputs.moreInfoLink || ""}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
        </>
    );
};

export default NewBookPage;