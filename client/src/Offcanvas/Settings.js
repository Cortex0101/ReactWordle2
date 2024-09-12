import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";

import { MenuContext } from "../contexts/MenuContext";

import "./Settings.css"

const Settings = () => {
    const toggleSettingsOpen = useContext(MenuContext).toggleSettingsOpen;
    const settingsOpen = useContext(MenuContext).settingsOpen;

  return (
      <Modal show={settingsOpen} onHide={toggleSettingsOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Indstillinger</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleSettingsOpen}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Settings;