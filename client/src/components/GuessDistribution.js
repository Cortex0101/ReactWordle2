// React-related imports
import React, { useContext, useEffect, useState, useRef } from "react";
import { Stack, ProgressBar } from "react-bootstrap";
import { motion, useMotionValue, animate } from "framer-motion";

// Internal styles
import "./GuessDistribution.css";

import { UserContext } from "../contexts/UserContext";

import { useTranslation } from "react-i18next";

/*
Should render a small number label in front of each #1, #2, #3, #4, #5, #6, #F
Then render a progress bar (with label ie. 63.7%) that represents the percentage of guesses that were that number (multiply by 100). 
Then render a small number label at the end of the progress bar that represents the number of guesses that were that number.
*/
const GuessDistribution = () => {
    const { t } = useTranslation();
    const { generalStatistics, disableAnimations, ANIMATION_DURATION } = useContext(UserContext);
    const guessDistribution = generalStatistics.guessDistribution;

    // Store motion values for each distribution
    const motionValues = useRef(
        guessDistribution.map(() => ({
            percentage: useMotionValue(0),
            total: useMotionValue(0),
        }))
    );

    // Store animated values for rendering
    const [animatedValues, setAnimatedValues] = useState(
        guessDistribution.map((dist) => ({
            percentage: disableAnimations ? dist.percentage * 100 : 0,
            total: disableAnimations ? dist.total : 0,
        }))
    );

    useEffect(() => {
        if (disableAnimations) {
            // Set final values immediately if animations are disabled
            setAnimatedValues(
                guessDistribution.map((dist) => ({
                    percentage: dist.percentage * 100,
                    total: dist.total,
                }))
            );
        } else {
            // Animate values with Framer Motion
            guessDistribution.forEach((guess, index) => {
                const { percentage, total } = motionValues.current[index];

                // Animate percentage
                animate(percentage, guess.percentage * 100, {
                    duration: ANIMATION_DURATION / 1000,
                    ease: "easeInOut",
                    onUpdate: (latestPercentage) => {
                        // Update state only when value actually changes
                        setAnimatedValues((prev) => {
                            const updated = [...prev];
                            if (updated[index].percentage !== latestPercentage) {
                                updated[index].percentage = latestPercentage;
                            }
                            return updated;
                        });
                    },
                });

                // Animate total
                animate(total, guess.total, {
                    duration: ANIMATION_DURATION / 1000,
                    ease: "easeInOut",
                    onUpdate: (latestTotal) => {
                        // Update state only when value actually changes
                        setAnimatedValues((prev) => {
                            const updated = [...prev];
                            if (updated[index].total !== latestTotal) {
                                updated[index].total = latestTotal;
                            }
                            return updated;
                        });
                    },
                });
            });
        }
    }, [guessDistribution, disableAnimations, ANIMATION_DURATION]);

    return (
        <Stack direction="vertical" className="guess-distribution">
            {animatedValues.map((animatedValue, index) => (
                <Stack direction="horizontal" key={index} className="guess-distribution__row w-100">
                    <div className="guess-distribution__label">#{index + 1}</div>

                    <div className="guess-distribution__progress-bar-wrapper" style={{ width: "100%", marginRight: "1rem" }}>
                        <ProgressBar
                            now={animatedValue.percentage}
                            label={`${animatedValue.percentage.toFixed(0)}%`}
                            className="guess-distribution__progress-bar"
                            style={disableAnimations ? { transition: "none" } : {}}
                        />
                    </div>

                    <div className="guess-distribution__number">
                        {Math.round(animatedValue.total)}
                    </div>
                </Stack>
            ))}
        </Stack>
    );
};

export default GuessDistribution;
