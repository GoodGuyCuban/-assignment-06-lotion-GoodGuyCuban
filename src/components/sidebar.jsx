import React from "react";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
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
        datetime: "",
        content: "<i>your message here</i>",
    }



    noteList.push(note);
    localStorage.setItem("noteList", JSON.stringify(noteList));


    return note;
}

const Sidebar = () => {
    //navigate to the new note after it is created
    const navigate = useNavigate();
    const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
    //add elipses to the end of the note content if it is longer than 60 characters
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
                            <p dangerouslySetInnerHTML={{ __html: note.content.length > 100 ? note.content.substring(0, 100) + "..." : note.content }} />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar

