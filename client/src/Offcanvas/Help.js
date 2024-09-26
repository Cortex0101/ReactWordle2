import React from "react";
import { useContext } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useTranslation } from "react-i18next";

import { MenuContext } from "../contexts/MenuContext";
import { UserContext } from "../contexts/UserContext";

import "./Help.css"

const Help = () => {
  const { t } = useTranslation(); // Correct usage of the hook

  const { toggleHelpOpen, helpOpen } = useContext(MenuContext);
  const { disableAnimations } = useContext(UserContext);

  return (
    <Modal show={helpOpen} onHide={toggleHelpOpen} animation={!disableAnimations}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.help.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{t('modals.help.content.rules.title')}</h3>

        <ul>
          <li>{t('modals.help.content.rules.ul.li1')}</li>
          <li>{t('modals.help.content.rules.ul.li2')}</li>
          <li>{t('modals.help.content.rules.ul.li3')}</li>
        </ul>

        <h3>{t('modals.help.content.examples.title')}</h3>

        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Row>
                <Col className="board-cell">
                  <div className={`board-cell__content`}>
                    S
                  </div>
                </Col>
                <Col className="board-cell">
                  <div className={`board-cell__content`}>
                    S
                  </div>
                </Col>
                <Col className="board-cell">
                  <div className={`board-cell__content`}>
                    S
                  </div>
                </Col>
                <Col className="board-cell">
                  <div className={`board-cell__content`}>
                    S
                  </div>
                </Col>
                <Col className="board-cell">
                  <div className={`board-cell__content`}>
                    S
                  </div>
                </Col>
              </Row>
              <Row>
                DOWN
              </Row>
            </Col>
            <Col xs={6} md={3}>
              <p>test</p>
            </Col>
            <Col xs={6} md={3}>
              test
            </Col>
            <Col xs={6} md={3}>
              test
            </Col>
          </Row>
        </Container>

        <ul>
          <li>{t('modals.help.content.examples.ul.li1')}</li>
          <li>{t('modals.help.content.examples.ul.li2')}</li>
          <li>{t('modals.help.content.examples.ul.li3')}</li>
        </ul>

        <h3>{t('modals.help.content.explanation.title')}</h3>

        <ul>
          <li>
            <h4>{t('modals.help.content.explanation.ul.li1.title')}</h4>
            <p>{t('modals.help.content.explanation.ul.li1.content')}</p>
          </li>
          <li>
            <h4>{t('modals.help.content.explanation.ul.li2.title')}</h4>
            <p>{t('modals.help.content.explanation.ul.li2.content')}</p>
          </li>
        </ul>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleHelpOpen}>
          {t('modals.help.close')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Help;