import React, { useState } from 'react';
import { Note } from "./models/notesModel";
import NotesList from "./components/NotesList"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "Groceries",
    text: "Pick up groceries after work",
    color: "#dfdfdf",
    date: (new Date()).toString()
    }]
  );

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList  notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
