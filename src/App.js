import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ROUTES } from './router/routes';
// this is where we import the pages components
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import NewBookPage from './pages/NewBookPage';
import ReadingListPage from './pages/ReadlingListPage';

// install the context
import { BookProvider } from './store/BookContext';
import { ReadingListProvider } from './store/ReadingListContext';

import './App.css';

function App() {
  return (
    <div id='book-app'>
      <BookProvider>
        <ReadingListProvider>
          <Router>
            {/**This is the nav bar */}
            <nav>
              <Link to='/'>Home</Link> | <Link to='/readingList'>Readling List</Link>
            </nav>

            {/**This is where the routes and which page component */}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/readingList' element={<ReadingListPage />} />
              <Route path='/newBook' element={<NewBookPage />} />
              <Route path='/book/:id' element={<BookDetailPage />} />
            </Routes>
          </Router>
        </ReadingListProvider>
      </BookProvider>
    </div>
  );
}

export default App;
