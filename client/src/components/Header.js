// React-related imports
import React, { useContext } from "react";
import { Container, Navbar, ButtonGroup, Button } from "react-bootstrap";

// Third-party libraries or packages
import { GoogleLogin } from '@react-oauth/google';

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
    const toggleStatsOpen = useContext(MenuContext).toggleStatsOpen;
    const toggleSettingsOpen = useContext(MenuContext).toggleSettingsOpen;
    const toggleHelpOpen = useContext(MenuContext).toggleHelpOpen;

    const isAuthenticated = useContext(UserContext).isAuthenticated;
    const handleLoginSuccess = useContext(UserContext).handleLoginSuccess;
    const handleLogout = useContext(UserContext).handleLogout;

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