// React-related imports
import React from "react";
import { Button } from "react-bootstrap";

// External styles
import 'bootstrap-icons/font/bootstrap-icons.css';

// Internal styles
import "./IconButton.css";


const IconButton = ({text, icon, variant, handleClick}) => {
    return (
        <Button className="icon-button" variant={variant} onClick={handleClick}>
            <i className={icon}></i> {text}
        </Button>
    );
}

export default IconButton;