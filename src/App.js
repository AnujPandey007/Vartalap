import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        {/* <Alert customAlert={customAlert}/> */}

        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
