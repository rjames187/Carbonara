import { StrictMode } from "react";
import ReactDom from 'react-dom'
import { createRoot } from "react-dom/client";
import Homepage from "./pages/Homepage";
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById("root");
ReactDom.render(
  <App />
   ,container
);



