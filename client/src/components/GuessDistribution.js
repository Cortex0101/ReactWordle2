// React-related imports
import React, { useContext, useState, useEffect } from "react";
import { Stack, ProgressBar } from "react-bootstrap";

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
    const { guessDistribution, disableAnimations, ANIMATION_DURATION } = useContext(UserContext);
    const [animatedValues, setAnimatedValues] = useState(
        guessDistribution.map((dist) => (
            disableAnimations ? { percentage: dist.percentage * 100, total: dist.total } : { percentage: 0, total: 0 }
        ))
    );

    
    useEffect(() => {
        if (disableAnimations) {
            return;
        } else {
            guessDistribution.forEach((guess, index) => {
                let start = null;
                const startValue = { percentage: 0, total: 0 };
                const endValue = { percentage: guess.percentage * 100, total: guess.total };

                const step = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const currentPercentage = Math.min(
                        startValue.percentage + (progress / ANIMATION_DURATION) * (endValue.percentage - startValue.percentage),
                        endValue.percentage
                    );
                    const currentTotal = Math.min(
                        startValue.total + (progress / ANIMATION_DURATION) * (endValue.total - startValue.total),
                        endValue.total
                    );

                    setAnimatedValues((prevValues) => {
                        const newValues = [...prevValues];
                        newValues[index] = {
                            percentage: currentPercentage,
                            total: currentTotal
                        };
                        return newValues;
                    });

                    if (progress < ANIMATION_DURATION) {
                        requestAnimationFrame(step);
                    }
                };

                requestAnimationFrame(step);
            });
        }
    }, [guessDistribution, disableAnimations, ANIMATION_DURATION]);

    return (
        <Stack direction="vertical" className="guess-distribution">
            {animatedValues.map((animatedValue, index) => (
                <Stack direction="horizontal" key={index} className="guess-distribution__row w-100">
                    <div className="guess-distribution__label">#{index + 1}</div>
                    <ProgressBar
                        now={animatedValue.percentage}
                        label={`${animatedValue.percentage.toFixed(0)}%`}
                        className="guess-distribution__progress-bar"
                        style={disableAnimations ? { transition: "none !important" } : {}}
                    />
                    <div className="guess-distribution__number">{Math.round(animatedValue.total)}</div>
                </Stack>
            ))}
        </Stack>
    );
}

export default GuessDistribution;