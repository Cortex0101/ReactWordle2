// React-related imports
import React, { useContext, useState } from "react";
import { Offcanvas, Tabs, Tab, Form, FloatingLabel, Container, Row, Col, Button } from "react-bootstrap";

// External libraries
import { useTranslation } from "react-i18next";
import { GoogleLogin } from '@react-oauth/google';

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";
import { UserContext } from "../contexts/UserContext";

import "./Login.css";

/* 
    This login uses 2 tabs, one for logging in (exsisting account) aswell as creating an account with 
    facebook, google, twitter, and github.

    The second tab is for creating an acount with just a username and password.
*/

const LoggedInTab = ({ handleLogout, user }) => {
    const { t } = useTranslation();

    return (
        <div>
            <p>You are already logged in as {user.given_name}</p>
            <Button onClick={handleLogout} className="btn btn-primary w-100" variant="danger">{t('modals.login.tabs.login.buttons.logout')}</Button>
        </div>
    );
}

const LoginTab = ({ handleLoginSuccess }) => {
    const { t } = useTranslation();
    const [rememberMe, setRememberMe] = useState(true);

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <Container>
            <FloatingLabel
                controlId="floatingInput"
                label={t('modals.login.tabs.login.forms.email.label')}
                className="mb-3"
            >
                <Form.Control type="email" placeholder={t('modals.login.tabs.login.forms.email.placeholder')} />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label={t('modals.login.tabs.login.forms.password.label')}
                className="mb-3"
            >
                <Form.Control type="email" placeholder={t('modals.login.tabs.login.forms.password.placeholder')} />
            </FloatingLabel>

            <Row className="mb-3">
                <Col className="d-flex justify-content-center">
                    {/* Remember me checkbox with label on right */}
                    <Form.Check
                        type="checkbox"
                        id="rememberMe"
                        label={t('modals.login.tabs.login.buttons.remember-me')}
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                    />
                </Col>
                <Col>
                    {/* Forgot password link */}
                    <a href="#">{t('modals.login.tabs.login.buttons.forgot-password')}</a>
                </Col>
            </Row>
            <Row className="mb-3">
                {/* Login button */}
                <Col className="d-flex justify-content-center">
                    <Button className="btn btn-primary w-100">{t('modals.login.tabs.login.buttons.login')}</Button>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    {/* "Or" text with horizontal rule on each side */}
                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">{t('modals.login.tabs.login.divider-text')}</p>
                    </div>
                </Col>
            </Row>
            <Row className="mb-3">
                {/* Login button */}
                <Col className="d-flex justify-content-center">
                    {/*<Button className="btn btn-primary w-100">{t('modals.login.tabs.login.buttons.continue-with')} Google</Button>*/}
                    <GoogleLogin
                        onSuccess={(response) => handleLoginSuccess(response)}
                        onFailure={(response) => console.log(response)}
                        theme="filled_black"
                        shape="pill"
                        size="medium"
                        width="335px"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                {/* Login button */}
                <Col className="d-flex justify-content-center">
                    <Button className="btn btn-primary w-100">{t('modals.login.tabs.login.buttons.continue-with')} Facebook</Button>
                </Col>
            </Row>
        </Container>
    );
}

const SignUpTab = () => {
    return (
        <div>
            <p>Sign up to save your progress and compete with friends!</p>
            <button className="btn btn-primary">Sign up with Google</button>
        </div>
    );
}

const Login = () => {
    const { t } = useTranslation();

    const { toggleLoginOpen, loginOpen } = useContext(MenuContext);
    const { isAuthenticated, handleLoginSuccess, handleLogout, user } = useContext(UserContext); // Access the context

    return (
        <Offcanvas show={loginOpen} onHide={toggleLoginOpen} placement='bottom' className='h-100'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Login</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="px-0 py-0">
                {isAuthenticated ? (<LoggedInTab handleLogout={handleLogout} user={user} />
                ) : (
                    <Tabs
                        defaultActiveKey="login"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="login" title={t('modals.login.tabs.login.tab-title')} className="p-3 mx-auto phone-width">
                            <LoginTab handleLoginSuccess={handleLoginSuccess} />
                        </Tab>
                        <Tab eventKey="signUp" title={t('modals.login.tabs.sign-up.tab-title')} className="p-3 mx-auto phone-width">
                            <SignUpTab />
                        </Tab>
                    </Tabs>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Login;
