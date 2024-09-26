// React-related imports
import React, { useContext, useEffect, useState } from "react";
import { Stack, Tooltip, OverlayTrigger } from "react-bootstrap";

import { UserContext } from "../contexts/UserContext";

// Internal styles
import "./StatisticsBox.css";

/* Component renders a 2 row shadowed box that renders a large 
number on top row and a label describing the stat number on the bottom row 
*/
const StatisticsBox = ({statistic, description, tooltipText}) => {
    const [animatedValue, setAnimatedValue] = useState(0);
    const isFloat = !Number.isInteger(parseFloat(statistic));

    const { disableAnimations, ANIMATION_DURATION } = useContext(UserContext);

    useEffect(() => {
        if (disableAnimations) {
            setAnimatedValue(isFloat ? parseFloat(statistic).toFixed(2) : parseInt(statistic));
            return;
        }

        let start = null;
        const startValue = 0;
        const endValue = parseFloat(statistic);
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const currentValue = Math.min(startValue + (progress / ANIMATION_DURATION) * (endValue - startValue), endValue);
            const formattedValue = isFloat 
                ? currentValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
                : currentValue.toFixed(0);
            setAnimatedValue(formattedValue);
            if (progress < ANIMATION_DURATION) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [statistic, ANIMATION_DURATION, disableAnimations, isFloat]);

    return (
        <OverlayTrigger
        placement="top"
        overlay={
            <Tooltip id="tooltip-top">
                {tooltipText}
            </Tooltip>
        }
    >
        <Stack direction="vertical" className="statistics-box shadow-sm p-3 mb-3 bg-body-tertiary rounded text-center">
            <div className="statistics-box__number fw-bold fs-2">{animatedValue}</div>
            <div className="statistics-box__description fs-6">{description}</div>
        </Stack>
        </OverlayTrigger>
    );
}

export default StatisticsBox;