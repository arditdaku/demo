import { nanoid } from "nanoid";

const NoteListDb = [
  {
    id: nanoid(),
    category: "todo",
    title: "To Do",
  },
  {
    id: nanoid(),
    title: "Important",
    category: "important",
  },
  {
    id: nanoid(),
    title: "Shopping",
    category: "shopping",
  },
  {
    id: nanoid(),
    title: "Meetings",
    category: "meetings",
  },
];

export default NoteListDb;
