import * as React from 'react';
import {Note} from "../models/notesModel"

interface INotesProps {
    note: Note
}

const Notes: React.FunctionComponent<INotesProps> = ( {note}) => {
  return(
      <>
        <h1>note1</h1>
      </>
  ) ;
};

export default Notes;
