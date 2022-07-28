import React from "react";
import Note from "./Note";
import CreatedNote from "./CreatedNote";

function NoteList({ notes, addingNote }) {
  return (
    <div className="w-full flex flex-col items-center  py-5 space-y-5">
      <h1>To Do</h1>
      {notes.map((note, id) => (
        <Note
          addingNote={addingNote}
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          date={note.date}
        />
      ))}
      <CreatedNote addingNote={addingNote} />
    </div>
  );
}

export default NoteList;
