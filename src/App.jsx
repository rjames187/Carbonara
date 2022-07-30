import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Calculate from "./pages/Calculate"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;