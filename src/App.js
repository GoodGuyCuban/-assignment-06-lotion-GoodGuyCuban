import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import React from 'react';
import Layout from "./components/layout";
import Notes from "./components/notes";
import sidebar from "./components/sidebar";
import Editnote from "./components/editnote";


//route the edit page using the note num as a parameter to the Editnote component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/notes" replace={true} />}></Route>
          <Route path="/notes" element={<sidebar />}></Route>
          <Route path="/notes/:id" element={<Notes />}></Route>
          <Route path="/notes/:id/edit" element={<Editnote />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
