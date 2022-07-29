import React, { useState } from "react";
import Note from "./Note";
import CreatedNote from "./CreatedNote";
import NoteListDb from "./NoteListDb";

function NoteList({ notes, addingNote, deletingNote, title }) {
  return (
    <div className="w-full flex flex-col items-center  py-5 space-y-5">
      <h1 className="text-3xl font-bold">{title}</h1>
      {notes.map((note, id) => {
        return (
          <Note
            key={note.id}
            addingNote={addingNote}
            id={note.id}
            title={note.title}
            content={note.content}
            date={note.date}
            deletingNote={deletingNote}
          />
        );
      })}
      <CreatedNote addingNote={addingNote} />
    </div>
  );
}

export default NoteList;
