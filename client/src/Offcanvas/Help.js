import React from "react";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import { useTranslation } from "react-i18next";

import { MenuContext } from "../contexts/MenuContext";

import "./Help.css"

const Help = () => {
    const { t } = useTranslation(); // Correct usage of the hook

    const toggleHelpOpen = useContext(MenuContext).toggleHelpOpen;
    const helpOpen = useContext(MenuContext).helpOpen;

    return (
        <Modal show={helpOpen} onHide={toggleHelpOpen}>
            <Modal.Header closeButton>
                <Modal.Title>{t('modals.help.title')}</Modal.Title>
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