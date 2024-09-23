// React-related imports
import React, { useContext } from "react";
import { Container, Navbar, ButtonGroup, Button } from "react-bootstrap";

// Third-party libraries or packages
import { GoogleLogin } from '@react-oauth/google';
import { useTranslation } from "react-i18next";

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";
import { UserContext } from "../contexts/UserContext";
import IconButton from "./IconButton";

const Header = () => {
    const { t } = useTranslation(); 

    const { toggleStatsOpen, toggleSettingsOpen, toggleHelpOpen, toggleSideNavBarOpen } = useContext(MenuContext);
    const { isAuthenticated, handleLoginSuccess, handleLogout } = useContext(UserContext);

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
                <Navbar.Brand href="#home">{t('header.title')}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <ButtonGroup aria-label="Modal buttons">
                            <IconButton icon="bi bi-question-circle" variant="secondary" handleClick={toggleHelpOpen} />
                            <IconButton icon="bi bi-bar-chart" variant="secondary" handleClick={toggleStatsOpen} />
                            <IconButton icon="bi bi-gear" variant="secondary" handleClick={toggleSettingsOpen} />
                            <IconButton icon="bi bi-list" variant="secondary" handleClick={toggleSideNavBarOpen} />
                        </ButtonGroup>
                    </Navbar.Text>

                    {renderSignInButton()}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;