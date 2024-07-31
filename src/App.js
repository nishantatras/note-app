import NoteList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/search";
import Header from "./components/header";
import Pagination from "./components/Pagination";

const App = () => {
  //State to get the cureent Page Number
  const [currentPage, setCurrentPage] = useState(1);
  //Sets the total amount of Posts on the page
  const [postsPerPage] = useState(7);
  //Gets the searching Text from the Search Bar
  const [searchText, setSearchText] = useState("");
  //Checks if the DarkMode is enabled
  const [darkMode, setDarkMode] = useState(false);

  const updateNote = (id, text, date) => {
    const updatedNotes = notes.filter((note) => note.id === id);
    updatedNotes.text = text;
    updatedNotes.date = date;
  };

  //Initial state of the notes Collection
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "second Note",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "third Note",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "fourth Note",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "5 Note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "6 Note",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "7 Note",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "8 Note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "9 Note",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "10 Note",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "11 Note",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "12 Note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "13 Note",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "14 Note",
      date: "28/04/2021",
    },
  ]);

  //To get the Saved Notes from the local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  //To store the notes in the local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //To get index of the notes
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //Notes to display on current page
  const currentPosts = notes.slice(indexOfFirstPost, indexOfLastPost);

  //Divide all the notes into pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Add Note to the Notes Object
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  //Delet from notes collection
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={currentPosts.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleUpdateNote={updateNote}
        />
        <Pagination
          postPerPage={postsPerPage}
          totalPosts={notes.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default App;
