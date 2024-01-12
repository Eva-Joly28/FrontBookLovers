import logo from './logo.svg';
import './App.css';
import BookCreation from './components/BookCreation';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { useState } from 'react';
import SearchingBook from './components/SearchingBook';

function App() {
  const [queryValue, setqueryValue] = useState('')

  const handleInputValue = (query) =>{
    setqueryValue(query)
  }

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/createBook" element={<BookCreation/>} />
        <Route path='/books' element={<SearchingBook/>} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
