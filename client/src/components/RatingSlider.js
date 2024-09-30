import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Internal context providers (like global app contexts)
import { UserContext } from "../contexts/UserContext";

// Internal styles
import "./RatingSlider.css";

const RatingSlider = () => {
    const { generalStatistics, disableAnimations, ANIMATION_DURATION } = useContext(UserContext);
    const sliderRef = useRef(null);  // Reference to the slider container
    const [displayedRating, setDisplayedRating] = useState(0);  // State for displaying rating instantly when animations are disabled

    const rating = generalStatistics.rating;  // Get the rating from the context

    // Motion value for the rating number and arrow position
    const arrowX = useMotionValue(0);  
    const ratingNumber = useMotionValue(0);

    useEffect(() => {
        // Get the width of the slider container
        const sliderWidth = sliderRef.current?.offsetWidth || 0;

        // Calculate the arrow position based on the rating percentage
        const newPosition = (rating / 100) * sliderWidth;

        if (disableAnimations) {
            // If animations are disabled, set the values instantly
            arrowX.set(newPosition);
            setDisplayedRating(Math.round(rating));  // Directly update the displayed rating
        } else {
            // Smoothly animate the arrow and the rating number
            const controls = animate(arrowX, newPosition, { duration: ANIMATION_DURATION / 1000, ease: "easeInOut" });
            const numberControls = animate(ratingNumber, rating, { duration: ANIMATION_DURATION / 1000, ease: "easeInOut" });

            // Stop animations when the component unmounts
            return () => {
                controls.stop();
                numberControls.stop();
            };
        }
    }, [rating, disableAnimations, ANIMATION_DURATION, arrowX, ratingNumber]);

    // Transform the motion value for the number to round it before displaying, if animations are enabled
    const roundedRating = useTransform(ratingNumber, (latest) => Math.round(latest));

    return (
        <div className="performance-slider-container" ref={sliderRef}>
          <div className="performance-bar"></div>    

          {/* Animate the arrow's position */}
          <motion.div
            className="performance-arrow"
            style={{ left: arrowX }}  // Use pixel values for left
          >
            <div className="arrow">
              {/* Conditionally display either the animated or static value */}
              <motion.span>
                {disableAnimations ? displayedRating : roundedRating}
              </motion.span>
            </div>
          </motion.div>
        </div>
      );
}

export default RatingSlider;
