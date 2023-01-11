import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoMain from './Components/InfoMain';
import DetailPage from './Components/DetailPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/:id' element={<InfoMain />} />
        <Route exact path='/:id/posts' element={<DetailPage />} />
        <Route exact path='/:id/gallery' element={<DetailPage />} />
        <Route exact path='/:id/todo' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
