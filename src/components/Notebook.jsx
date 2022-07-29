import React, { useState } from "react";
import NoteList from "./NoteList";
import NotesDb from "./NotesDb";
import NoteListDb from "./NoteListDb";
import { nanoid } from "nanoid";
import "../index.scss";

const Notebook = () => {
  const [notes, setNotes] = useState(NotesDb);
  // const [list, setList] = useState(NoteListDb);

  console.log(notes);

  const filterResult = (category) => {
    const result = NoteListDb.filter((data) => {
      return data.category === category;
    });
    setNotes(result);
  };

  const addNote = (content, title) => {
    const date = new Date();
    console.log(content);
    const theNewNote = {
      title: title,
      content: content,
      id: nanoid(),
      date: date.toLocaleDateString(),
    };
    const completedNote = [...notes, theNewNote];
    setNotes(completedNote);
  };

  const deleteNote = (id) => {
    const completedNote = notes.filter((note) => note.id !== id);
    setNotes(completedNote);
  };
  return (
    <div className="notelist max-w-[800px] w-[90%]  flex items-center backdrop-blur-md justify-center bg-[#0000009a] text-white">
      <div className="w-1/2 py-[3rem] ">
        <div className="flex flex-col">
          <button
            onClick={() => filterResult("todo")}
            className="w-full hover:bg-[#0000009a] transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            To Do
          </button>
          <button
            onClick={() => filterResult("meetings")}
            className="w-full hover:bg-[#0000009a] transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            Meetings
          </button>
          <button
            onClick={() => filterResult("shopping")}
            className="w-full hover:bg-[#0000009a] transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            Shopping
          </button>
          <button
            onClick={() => filterResult("important")}
            className="w-full hover:bg-[#0000009a] transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            Important
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-[#4b4a4a11] py-4 backdrop-blur-md max-h-[35rem] h-[35rem] overflow-y-scroll">
        <h1>{notes.title}</h1>
        {notes.map((note) => {
          return (
            <NoteList
              title={note.title}
              notes={notes}
              addingNote={addNote}
              deletingNote={deleteNote}
              id={note.id}
            />
          );
        })}
        {/* 
        <NoteList
          id={list.id}
          key={list.id}
          title={list.title}
          notes={list}
          addingNote={addNote}
          deletingNote={deleteNote}
        /> */}
      </div>
    </div>
  );
};

export default Notebook;
