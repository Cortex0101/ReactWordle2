import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";

import { MenuContext } from "../contexts/MenuContext";

import "./SideNavBar.css"

const Sidebar = () => {
    const { sideNavBarOpen, toggleSideNavBarOpen } = useContext(MenuContext);

    return (
        <Offcanvas show={sideNavBarOpen} onHide={toggleSideNavBarOpen} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Side Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Log out</li>
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Sidebar;
    