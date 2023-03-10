import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useEffect } from 'react';

//create and edit notes using the quill editor
//only save the note when the save button is pressed
//add the ability to delete the note using the delete button
//also add the ability to edit the title of the note
const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};

const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
        return "";
    }
    return formatted;
};

const Editnote = () => {
    const { id } = useParams();
    const [note, setNote] = useState({});
    const [content, setContent] = useState("");
    const [datetime, setDatetime] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
        const note = noteList.find(note => note.notenum === parseInt(id));
        setNote(note);
        setTitle(note.title);
        setContent(note.content);
    }, [id]);

    const handleChange = (value) => {
        setContent(value);
    }
    //handle change for date 
    const handleDateChange = (value) => {
        setDatetime(value);
    }

    const SaveNote = () => {
        const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
        const note = noteList.find(note => note.notenum === parseInt(id));

        note.title = title;
        note.content = content;
        //save the datetime the note was last edited if the datetime was not already set
        if (datetime === "") {
            note.datetime = formatDate(new Date());
        } else {
            note.datetime = formatDate(datetime);
        }
        localStorage.setItem("noteList", JSON.stringify(noteList));
        return note;
    }

    //TODO: fix delete function
    const deleteNote = () => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            const noteList = JSON.parse(localStorage.getItem("noteList")) || [];
            const note = noteList.find(note => note.notenum === parseInt(id));
            const index = noteList.indexOf(note);
            noteList.splice(index, 1);
            //update notenum for all notes after the deleted note
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
                        <li><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></li>
                        <li><input type="datetime-local" value={datetime} onChange={(e) => handleDateChange(e.target.value)} /></li>
                    </ul>
                </li>
                <li class="selectable"><button type="button" onClick={() => navigate(`/notes/${SaveNote().notenum}`)}>Save</button></li>
                <li class="selectable"><button type="button" onClick={() => deleteNote()}>Delete</button></li>
            </ul>
            <div class="note">
                <ReactQuill value={content} onChange={handleChange} />
            </div>

        </div>

    )
}

export default Editnote;