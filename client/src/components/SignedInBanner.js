import React, { useContext } from "react";
import { Container, Row, Col, Stack, Image } from "react-bootstrap";

import { FaChevronRight } from "react-icons/fa";

// Internal styles
import "./SignedInBanner.css";

/* Two cols split the image to a 30-70 ratio 
    The right col contains the user's full name, username, and joined date in a vertical stack
    The left col contains the user's profile image
*/
const SignedInBanner = ({ fullName, userName, joinedDate, imageURL }) => {
    return (
        <Container className="shadow-sm pb-2 mb-4 bg-body rounded">
            <Row>
                <Col xs={4} className="px-0">
                    <Image src={imageURL
                        ? imageURL
                        : "https://via.placeholder.com/150"} thumbnail />
                </Col>
                <Col xs={8} className="px-2">
                    {/* Stack the user's full name, username, and joined date */}
                    {/* The UserName should go first, and be a large bold font, then the full name, and then the joined date */}
                    {/* Importantly, the height that all 3 of these elements take up should be the same as the image */}
                    <Stack direction="vertical" className="h-100" gap={2}>
                        <span className="fw-bold fs-4">{userName}</span>
                        <span>{fullName}</span>
                        <span>Joined: {joinedDate}</span>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
};

export default SignedInBanner;