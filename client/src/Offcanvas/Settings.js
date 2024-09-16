import React, { useContext } from "react";
import { Modal, Button, ListGroup, FormCheck, Form } from "react-bootstrap";

import { useTranslation } from "react-i18next";

import { MenuContext } from "../contexts/MenuContext";

import "./Settings.css"

const Settings = () => {
  const { t } = useTranslation();

  const toggleSettingsOpen = useContext(MenuContext).toggleSettingsOpen;
  const settingsOpen = useContext(MenuContext).settingsOpen;

  return (
    <Modal show={settingsOpen} onHide={toggleSettingsOpen}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.settings.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as="ul">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={(e) => {
              if (e.target.closest('input')) return;
              e.target.closest('li').querySelector('input').click();
            }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{t('modals.settings.theme.title')}</div>
              {t('modals.settings.theme.description')}
            </div>
            <FormCheck id="settings-form-check-1" aria-label="radio 1" />
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={(e) => {
              if (e.target.closest('input')) return;
              e.target.closest('li').querySelector('input').click();
            }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{t('modals.settings.colorBlind.title')}</div>
              {t('modals.settings.colorBlind.description')}
            </div>
            <FormCheck id="settings-form-check-2" aria-label="radio 2" />
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={(e) => {
              if (e.target.closest('input')) return;
              e.target.closest('li').querySelector('input').click();
            }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{t('modals.settings.swapButtons.title')}</div>
              {t('modals.settings.swapButtons.description')}
            </div>
            <FormCheck id="settings-form-check-3" aria-label="radio 3" />
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleSettingsOpen}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Settings;