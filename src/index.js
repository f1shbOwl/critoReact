import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Home from './views/Home'
import Contact from './views/Contact'
import News from './views/News'
import NewsDetails from './views/NewsDetails'
import NotFound from './views/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/News' element={<News />} />
        <Route path='/NewsDetails' element={<NewsDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);