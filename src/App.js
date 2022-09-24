import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Chat from './pages/Chat'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/me" element={<Profile/>}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
