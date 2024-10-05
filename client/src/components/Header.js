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

    const { toggleStatsOpen, toggleSettingsOpen, toggleHelpOpen, toggleSideNavBarOpen, toggleLoginOpen } = useContext(MenuContext);
    const { isAuthenticated, user } = useContext(UserContext);

    const renderSignInButton = () => {
        if (isAuthenticated) {
            return (
                <IconButton icon={user.picture} variant="secondary" handleClick={toggleLoginOpen} />
            )
        } else {
            return (
                <IconButton icon="person-circle" variant="secondary" handleClick={toggleLoginOpen} />
            )
        }
    }

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://ordish.dk/img/logo-sm.webp"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    {t('header.title')}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <ButtonGroup aria-label="Modal buttons">
                            <IconButton icon="question-circle" variant="secondary" handleClick={toggleHelpOpen} />
                            <IconButton icon="bar-chart" variant="secondary" handleClick={toggleStatsOpen} />
                            <IconButton icon="gear" variant="secondary" handleClick={toggleSettingsOpen} />
                            <IconButton icon="list" variant="secondary" handleClick={toggleSideNavBarOpen} />
                            {renderSignInButton()}
                        </ButtonGroup>
                    </Navbar.Text>

                    {/*renderSignInButton()*/}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;