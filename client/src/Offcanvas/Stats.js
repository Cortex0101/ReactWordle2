import { useState } from 'react';
import { MenuContext } from "../contexts/MenuContext";
import { useContext } from "react";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Stats = () => {
    const toggleStatsOpen = useContext(MenuContext).toggleStatsOpen;
    const statsOpen = useContext(MenuContext).statsOpen;

  return (
    <Offcanvas show={statsOpen} onHide={toggleStatsOpen} placement='bottom' className='h-100'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dine statistikker</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default Stats;