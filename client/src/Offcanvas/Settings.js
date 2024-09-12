import React from "react";

import "./Settings.css"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { MenuContext } from "../contexts/MenuContext";
import { useContext } from "react";

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