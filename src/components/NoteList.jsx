import React, { useState } from "react";
import Note from "./Note";
import CreatedNote from "./CreatedNote";
import NoteListDb from "./NoteListDb";

function NoteList({ note, addingNote, deletingNote }) {
  return (
    <div className="w-full flex flex-col items-center  py-5 space-y-5">
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}
        date={note.date}
        deletingNote={deletingNote}
        addingNote={addingNote}
      />
      {/* <CreatedNote addingNote={addingNote} /> */}
    </div>
  );
}

export default NoteList;
