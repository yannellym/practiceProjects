import * as React from 'react';
import { Button, Form } from 'react-bootstrap';

interface ICreateNotesProps {
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);
    const [error, setError] = React.useState<string>("")
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(titleRef.current?.value === "" || textRef.current?.value === ""){
            return setError("Please fill out all fields")
        }
    }
  return (
      <>
        <h2>Create notes</h2>
        <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e) }>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter the title" ref={titleRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control  as="textarea" placeholder="Enter note" rows={4} ref={textRef}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="colorInput">Pick a color</Form.Label>
                <Form.Control  type="color" id="colorInput" defaultValue="#FF0000" title="choose color" ref={colorRef}/>
            </Form.Group>
            <Button type="submit" variant="primary">submit</Button>
        </Form>
      </>
  );
};

export default CreateNotes;
