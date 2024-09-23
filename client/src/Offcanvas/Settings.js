import React, { useContext } from "react";
import { Modal, Button, ListGroup, FormCheck, FormSelect } from "react-bootstrap";

import { useTranslation } from "react-i18next";

import { MenuContext } from "../contexts/MenuContext";
import { UserContext } from "../contexts/UserContext";

import "./Settings.css"

const Settings = () => {
  const { t } = useTranslation();

  const { theme, toggleTheme, language, changeLanguage, colorBlind, toggleColorBlind, swappedButtons, toggleSwappedButtons, SUPPORTED_LANGUAGES } = useContext(UserContext);
  const { toggleSettingsOpen, settingsOpen } = useContext(MenuContext);

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
            <FormCheck id="settings-form-check-1" aria-label="radio 1" type="switch"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
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
            <FormCheck id="settings-form-check-2" aria-label="radio 2" type="switch"
              checked={colorBlind}
              onChange={toggleColorBlind}
            />
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
            <FormCheck id="settings-form-check-3" aria-label="radio 3" type="switch"
              checked={swappedButtons}
              onChange={toggleSwappedButtons}
            />
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{t('modals.settings.swapButtons.title')}</div>
              {t('modals.settings.swapButtons.description')}
            </div>
            <FormSelect aria-label="Choose language"
              className="select-language"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))
              }
            </FormSelect>
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