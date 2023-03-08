import React from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useEffect } from 'react';

//create and edit notes using the quill editor
//only save the note when the save button is pressed
//add the ability to delete the note using the delete button
//also add the ability to edit the title of the note

const Editnote = () => {
    const { id } = useParams();
    const [note, setNote] = useState({});
    const [content, setContent] = useState("");
    
    useEffect(() => {
        const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
        const note = noteList.find(note => note.notenum === parseInt(id));
        setNote(note);
        setContent(note.content);
    }, [id]);

    const handleChange = (value) => {
        setContent(value);
    }

    const saveNote = () => {
        const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
        const note = noteList.find(note => note.notenum === parseInt(id));
        note.content = content;
        localStorage.setItem("noteList", JSON.stringify(noteList));
    }

    const deleteNote = () => {
        const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
        const note = noteList.find(note => note.notenum === parseInt(id));
        const index = noteList.indexOf(note);
        noteList.splice(index, 1);
        localStorage.setItem("noteList", JSON.stringify(noteList));
    }

    return (
        <div class="notes">
            <ul class="notebar">
                <li><h1>{note.title}</h1></li>
                <li><button type="button" onClick={() => saveNote()}>Save</button></li>
                <li><button type="button" onClick={() => deleteNote()}>Delete</button></li>
            </ul>
            <div class="note">
                <ReactQuill value={content} onChange={handleChange} />
            </div>
            
        </div>        
        
    )
}

export default Editnote;