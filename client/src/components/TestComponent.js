import React from "react";
import { Button } from "react-bootstrap";

import './TestComponent.css'

import { useTranslation } from "react-i18next";

const TestComponent = () => {
    //const {t} = useTranslation();

    return (
        <div className="test-div">
        <h1>Test Component</h1>
        <Button>Click Me</Button>
        </div>
    );
};

export default TestComponent;