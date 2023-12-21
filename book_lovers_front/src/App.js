import logo from './logo.svg';
import './App.css';
import BookCreation from './components/BookCreation';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/createBook" element={<BookCreation/>} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
