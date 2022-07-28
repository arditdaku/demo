import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

function CreatedNote({ addingNote }) {
  const [noteText, setNoteText] = useState("");
  const [input, setInput] = useState("");

  const changeText = (e) => {
    setNoteText(e.target.value);
  };

  const theInput = (e) => {
    setInput(e.target.value);
  };

  const savingNote = () => {
    addingNote(noteText);
    setInput(input);
  };
  return (
    <div className="flex flex-col justify-between px-3 w-[90%] h-[30%]  backdrop-blur-lg bg-[#fbfcfd27] rounded-lg">
      <div>
        <div className="border-b-2 py-2">
          <input
            value={input}
            onChange={theInput}
            type="text"
            className="bg-transparent text-lg border-none focus:outline-none"
          />
        </div>
        <textarea
          onChange={changeText}
          value={noteText}
          cols="8"
          rows="5"
          className="w-full border-none bg-transparent resize-none focus:outline-none"
        ></textarea>
      </div>
      <div className="pb-2 flex justify-between items-center">
        <p className="text-[13px] text-[#999999]">
          Created on: <span>20.5.2022</span>
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={savingNote}
            className="border-2 border-[#7beb20] rounded-full"
          >
            <AiOutlinePlus size="20px" className="text-[#7beb20]" />
          </button>
          <button>
            <FaTrashAlt size="18px" className="text-[#f76440]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatedNote;
