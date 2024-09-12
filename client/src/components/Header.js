import React from "react";

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import { MenuContext } from "../contexts/MenuContext";
import { UserContext } from "../contexts/UserContext";

import { useContext } from "react";
import { Container, Navbar, ButtonGroup, Button } from "react-bootstrap";

const Header = () => {
    const toggleStatsOpen = useContext(MenuContext).toggleStatsOpen;
    const toggleSettingsOpen = useContext(MenuContext).toggleSettingsOpen;
    const toggleHelpOpen = useContext(MenuContext).toggleHelpOpen;

    const isAuthenticated = useContext(UserContext).isAuthenticated;
    const handleLoginSuccess = useContext(UserContext).handleLoginSuccess;
    const handleLogout = useContext(UserContext).handleLogout;

    const handleSuccess = (response) => {
        console.log("Login Success:", response);
    };

    const handleError = () => {
        console.log("Login Failed");
    };

    const renderSignInButton = () => {
        if (isAuthenticated) {
            return (
                <Button variant="secondary" onClick={handleLogout}>
                    Log af
                </Button>
            )
        } else {
            return (
                <GoogleLogin
                    type='icon'
                    theme="filled_black"
                    onSuccess={handleLoginSuccess}
                    onError={handleLogout}
                >Log in</GoogleLogin>
            )
        }
    }

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Wordle2</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={toggleStatsOpen}>Left</Button>
                            <Button variant="secondary" onClick={toggleSettingsOpen}>Middle</Button>
                            <Button variant="secondary" onClick={toggleHelpOpen}>Right</Button>
                        </ButtonGroup>
                    </Navbar.Text>

                    {renderSignInButton()}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;