// React-related imports
import React, { useContext, useEffect, useState } from "react";
import { Stack } from "react-bootstrap";

// Internal styles
import "./StatisticsBox.css";

/* Component renders a 2 row shadowed box that renders a large 
number on top row and a label describing the stat number on the bottom row 
*/
const StatisticsBox = ({statistic, description}) => {
    const duration = 500;
    const [animatedValue, setAnimatedValue] = useState(0);
    const isFloat = !Number.isInteger(parseFloat(statistic));

    useEffect(() => {
        let start = null;
        const startValue = 0;
        const endValue = parseFloat(statistic);
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const currentValue = Math.min(startValue + (progress / duration) * (endValue - startValue), endValue);
            const formattedValue = isFloat 
                ? currentValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
                : currentValue.toFixed(0);
            setAnimatedValue(formattedValue);
            if (progress < duration) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [statistic, duration, isFloat]);

    return (
        <Stack direction="vertical" className="statistics-box shadow-sm p-3 mb-3 bg-body-tertiary rounded text-center">
            <div className="statistics-box__number fw-bold fs-2">{animatedValue}</div>
            <div className="statistics-box__description fs-6">{description}</div>
        </Stack>
    );
}

export default StatisticsBox;