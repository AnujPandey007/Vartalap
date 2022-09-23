import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Alert customAlert={customAlert}/> */}

        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
