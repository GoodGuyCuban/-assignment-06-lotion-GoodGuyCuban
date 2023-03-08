import React from "react";
import { useState } from "react";
import { Link, Outlet, useNavigate} from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";

//create a note object with a unique id and a note number that increments with each new note, add it to the noteList array stored in local storage, also route to the new note

const NewNote = () => {
    const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
    const note = {
        id: uuidv4(),
        notenum: noteList.length + 1,
        title: "Untitled",
        content: "JOEMAMA",
    }



    noteList.push(note);
    localStorage.setItem("noteList", JSON.stringify(noteList));
    
    
    return note;
}






const Sidebar = () => {
    //navigate to the new note after it is created
    const navigate = useNavigate();
    const noteList = JSON.parse(localStorage.getItem("noteList")) || [];


    return (
        <div>
            <ul class="menu">
                <li>Notes</li>
                <li><button type="button" onClick={() => navigate(`/notes/${NewNote().notenum}/edit`)}>New Note</button></li>
            </ul>
            <ul class="sidebar">
                {noteList.map(note => (
                    <li key={note.id}>
                        <Link to={`/notes/${note.notenum}`}>Note {note.notenum}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar

