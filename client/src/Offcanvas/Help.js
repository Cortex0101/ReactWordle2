import React from "react";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import { MenuContext } from "../contexts/MenuContext";

import "./Help.css"

const Help = () => {
    const toggleHelpOpen = useContext(MenuContext).toggleHelpOpen;
    const helpOpen = useContext(MenuContext).helpOpen;

  return (
      <Modal show={helpOpen} onHide={toggleHelpOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Hjælp</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleHelpOpen}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Help;