import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


//create a function to display the selected using the note id from local storage


const Notes = () => {
    const { id } = useParams();
    const [note, setNote] = useState({});

    useEffect(() => {
        const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
        const note = noteList.find(note => note.notenum === parseInt(id));
        setNote(note);
    }, [id]);

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
                    <li><button type="button"><Link to={`/notes/${note.notenum}/edit`}>Edit</Link></button></li>
                    <li><button type="button" onClick={() => deleteNote()}>Delete</button></li>
                </ul>
            

            <div class="note">
                <div dangerouslySetInnerHTML={{ __html: note.content }} />
            </div>
        </div>


    )
}

export default Notes;