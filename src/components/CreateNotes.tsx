import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from "../models/notesModel"
interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({ notes, setNotes }) => {
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);
    const [error, setError] = React.useState<string>("")
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(titleRef.current?.value === "" || textRef.current?.value === ""){
            return setError("Please fill out all fields")
        }
        setError("");
        setNotes([ ...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);
        
        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
    }
  return (
      <>
        <h2>Create a Note ✏️ </h2>
        <Form className="mt-3 mb-3 note-form" onSubmit={(e) => handleSubmit(e) }>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter the title" ref={titleRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control  as="textarea" placeholder="Enter note" rows={4} ref={textRef}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="colorInput">Color Category:</Form.Label>
                <Form.Control  type="color" id="colorInput" defaultValue="#FFCE1F" title="choose color" ref={colorRef}/>
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>} 
            <Button type="submit" variant="primary">submit</Button>
        </Form>
      </>
  );
};

export default CreateNotes;
