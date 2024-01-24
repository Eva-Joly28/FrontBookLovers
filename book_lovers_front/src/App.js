import logo from './logo.svg';
import './App.css';
import BookCreation from './components/BookCreation';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { useState } from 'react';
import SearchingBook from './components/SearchingBook';
import BookPage from './components/BookPage';

function App() {

  return (
    <>
    {/* <Header/> */}
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/createBook" element={<BookCreation/>} />
        <Route path='/books' element={<SearchingBook/>} />
        <Route path="books/book/:isbn" element={<BookPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
