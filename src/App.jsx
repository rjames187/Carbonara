import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";



function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Homepage />} />
    // </Routes>
    <Homepage/>
  );
}

export default App;