import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';
import PostID from './Components/PostID';
import Search from './Components/search';
import Default from './Components/Default';
import Navbar from './Navbar';
import Base from './Components/Base';

function App() {
  const isLogged = false;
  const data = {  
    "message": "Please Login"
  }

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={isLogged ? <Home/> : <Navigate to="/Default" replace state={data}/> }/>
        <Route path="/Default" element={<Default/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} /> 
        <Route path="/Search" element={<Search/>} /> 
        <Route path="/Post/:type" element={<Post/>} />
        <Route path="/Post/:type/:id" element={<PostID/>} />
        <Route path="/Base" element={<Base/>} />
        <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
      </Routes>
    </>
  );
}

export default App;
