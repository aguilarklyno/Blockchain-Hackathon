import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Root  from './pages/Root';
import Use from './pages/Use';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/use' element={<Use />} />
        </Routes>
        <Link to='/'>Back To Top</Link>
      </BrowserRouter>
    </div>
  )
}

export default App
