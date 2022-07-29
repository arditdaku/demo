import React, { useState, useEffect } from "react";
import NoteList from "./NoteList";
import NotesDb from "./NotesDb";
import { nanoid } from "nanoid";
import "../index.scss";
import CreatedNote from "./CreatedNote";
const Notebook = () => {
  const [notes, setNotes] = useState(NotesDb);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [filter, setFilter] = useState("all");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  useEffect(() => {
    notes.sort();
  }, []);

  // const [list, setList] = useState(NoteListDb);

  const filterResult = (category) => {
    if (category === "all") {
      setFilteredNotes(notes);
      setIsFilterOn(false);
    } else {
      const result = notes.filter((data) => {
        return data.category === category;
      });
      setFilteredNotes(result);
      setIsFilterOn(true);
      setFilter(category);
    }
  };

  const addNote = (title, content) => {
    const date = new Date();
    console.log(content);
    const theNewNote = {
      title: title,
      content: content,
      id: nanoid(),
      date: date.toLocaleDateString(),
      category: filter,
    };
    if (isFilterOn) {
      setFilteredNotes((prevState) => [theNewNote, ...prevState]);
      setNotes((prevState) => [theNewNote, ...prevState]);
    } else {
      setNotes((prevState) => [theNewNote, ...prevState]);
    }
  };

  // method to delete a note from the list of notes if they are filtered or not
  const deleteNote = (id) => {
    if (isFilterOn) {
      console.log("filtered before", filteredNotes);
      setFilteredNotes((prevState) =>
        prevState.filter((note) => note.id !== id)
      );
      setNotes((prevState) => prevState.filter((note) => note.id !== id));
    } else {
      console.log("not filder before", filteredNotes);
      setNotes((prevState) => prevState.filter((note) => note.id !== id));
      console.log("not filder after", filteredNotes);
    }
  };

  // const deleteNote = (id) => {
  //   console.log("Before")
  //   console.log(variablea++);
  //   let filterIndex = filteredNotes.findIndex((data) => data.id === id);
  //   let index = notes.findIndex((note) => note.id === id);

  //   if (isFilterOn) {
  //     setFilteredNotes((prevState) => [...prevState.splice(filterIndex, 1)]);
  //     setNotes((prevState) => [...prevState.splice(index, 1)]);
  //   } else {
  //     setNotes((prevState) => [...prevState.splice(index, 1)]);
  //     setFilteredNotes(notes);
  //   }
  // };
  return (
    <div className="notelist max-w-[800px] w-[90%]  flex items-center backdrop-blur-md justify-center bg-[#0000009a] text-white">
      <div className="w-1/2 py-[3rem] ">
        <div className="flex flex-col">
          <button
            onClick={() => filterResult("all")}
            className="w-full hover:bg-[#0000009a] transition-all 0.3s py-3 text-lg text-left pl-4 uppercase"
          >
            All notes
          </button>
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
      <div className="w-1/2 bg-[#4b4a4a11] flex flex-col items-center py-4 backdrop-blur-md max-h-[35rem] h-[35rem] overflow-y-scroll">
        {!isFilterOn && <h1>All notes</h1>}
        {isFilterOn && <h1 className="capitalize">{filter}</h1>}
        {isFilterOn && <CreatedNote fliter={filter} addingNote={addNote} />}
        {!isFilterOn &&
          notes.map((note) => {
            return (
              <NoteList key={note.id} note={note} deletingNote={deleteNote} />
            );
          })}
        {isFilterOn &&
          filteredNotes.map((note) => {
            return (
              <NoteList key={note.id} note={note} deletingNote={deleteNote} />
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
