import * as React from 'react';
import { Container, Navbar } from "react-bootstrap";
import "../styles/styles.css"

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
      <Navbar fixed="top" bg="primary" variant="light">
          <Container>
              <Navbar.Brand>
                <a href="./"><h1 className="logo"> NoteIT 🗒</h1></a>
              </Navbar.Brand>
          </Container>
      </Navbar>
  )
};

export default Header;


