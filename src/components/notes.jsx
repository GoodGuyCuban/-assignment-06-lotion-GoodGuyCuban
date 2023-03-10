import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Notes = () => {
    const { id } = useParams();
    const [note, setNote] = useState({});

    useEffect(() => {
        const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
        const note = noteList.find(note => note.notenum === parseInt(id));
        setNote(note);
    }, [id]);

    const deleteNote = () => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
            const note = noteList.find(note => note.notenum === parseInt(id));
            const index = noteList.indexOf(note);
            noteList.splice(index, 1);

            for (let i = index; i < noteList.length; i++) {
                noteList[i].notenum = noteList[i].notenum - 1;
            }
            localStorage.setItem("noteList", JSON.stringify(noteList));
            window.location.href = "/";
        }
        return note;
    }


    return (
        <div class="notes">

            <ul class="notebar">
                <li>
                    <ul>
                        <h1>{note.title}</h1>
                        <p>{note.datetime}</p>
                    </ul>
                </li>
                <li class="selectable"><Link to={`/notes/${note.notenum}/edit`}><button type="button">Edit</button></Link></li>
                <li class="selectable"><button type="button" onClick={() => deleteNote()}>Delete</button></li>
            </ul>


            <div class="note">
                <div class = "content" dangerouslySetInnerHTML={{ __html: note.content }} />
            </div>
        </div>


    )
}

export default Notes;