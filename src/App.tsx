import React, { useState } from 'react';
import { Note } from "./models/notesModel";
import NotesList from "./components/NotesList"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import CreateNotes from './components/CreateNotes';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "Groceries",
    text: "Remember to pick up groceries for dinner tonight. 5 carrots, 3 tomatoes, and a jar of pesto sauce!",
    color: "#FFECA8",
    date: (new Date()).toString()
    }]
  );

  return (
    <>
      <Header />
      <div className="home-div">
        <div className="create-note">
          <CreateNotes notes={notes} setNotes={setNotes} />
        </div>
        <div className="rendered-note">
          <NotesList  notes={notes} setNotes={setNotes} />
        </div>
      </div>
    </>
  );
}

export default App;
