import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import React from 'react';
import Layout from "./components/layout";
import Notes from "./components/notes";
import sidebar from "./components/sidebar";
import note from "./components/note";
import editnote from "./components/editnote";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/notes" replace={true} />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
