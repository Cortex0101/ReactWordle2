// React-related imports
import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";

// External libraries
import { useTranslation } from "react-i18next";

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";


const Stats = () => {
    const { t } = useTranslation();

    const toggleStatsOpen = useContext(MenuContext).toggleStatsOpen;
    const statsOpen = useContext(MenuContext).statsOpen;

  return (
    <Offcanvas show={statsOpen} onHide={toggleStatsOpen} placement='bottom' className='h-100'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('modals.statistics.title')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default Stats;