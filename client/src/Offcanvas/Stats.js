// React-related imports
import React from "react";
import { useContext } from "react";
import { Offcanvas } from "react-bootstrap";

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";


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