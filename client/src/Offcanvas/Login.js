// React-related imports
import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";

// External libraries
import { useTranslation } from "react-i18next";

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";

import "./Login.css";

const Login = () => {
    const { toggleLoginOpen, loginOpen } = useContext(MenuContext);

    return (
        <Offcanvas show={loginOpen} onHide={toggleLoginOpen} placement='bottom' className='h-100'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Login</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="login">
                    <p>Log in to save your progress and compete with friends!</p>
                    <button className="btn btn-primary">Log in with Google</button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Login;
