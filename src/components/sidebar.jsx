import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const NewNote = () => {
    const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
    const note = {
        id: uuidv4(),
        notenum: 1,
        title: "Untitled",
        datetime: "",
        content: "",
    }
    for (let i = 0; i < noteList.length; i++) {
        noteList[i].notenum = noteList[i].notenum + 1;
    }
    noteList.unshift(note);
    localStorage.setItem("noteList", JSON.stringify(noteList));
    
    return note;
}

const Sidebar = () => {

    const navigate = useNavigate();
    const noteList = JSON.parse(localStorage.getItem("noteList")) || [];

    for (let i = 0; i < noteList.length; i++) {
        if (noteList[i].content.length > 60) {
            noteList[i].content = noteList[i].content.substring(0, 60) + "...";
        }
    }


    return (
        <div class = "sidebar-container">
            <ul class="menu">
                <li><h2>Notes</h2></li>
                <li><button type="button" onClick={() => navigate(`/notes/${NewNote().notenum}/edit`)}><h2>+</h2></button></li>
            </ul>
            <ul class = "sidebar">
                {noteList.map(note => (
                    <li key={note.id}>
                        <NavLink className="navLink" to={`/notes/${note.notenum}`}>
                            <h4>{note.title}</h4>
                            <p class = "subtitle" dangerouslySetInnerHTML={{ __html: note.datetime }} />
                            <p class = "content" dangerouslySetInnerHTML={{ __html: note.content.length > 0 ? note.content : "..." }} />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar

