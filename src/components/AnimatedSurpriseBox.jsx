import { motion } from "motion/react";
import "./AnimatedSurpriseBox.css";

export default function AnimatedSurpriseBox({ isAnimating, onAnimationComplete }) {
    return (
        <div className="surprise-container">
            {/* Main Surprise Box */}
            <motion.div
                className="surprise-box"
                initial={{ x: -200, rotate: 0, scale: 1 }}
                animate={isAnimating ? {
                    x: [0, 50, 0],
                    rotate: [0, -15, 15, 0],
                    scale: [1, 1.1, 1]
                } : { x: -200, rotate: 0, scale: 1 }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.6, 1]
                }}
                onAnimationComplete={() => {
                    if (isAnimating) {
                        // Start explosion after movement
                        setTimeout(() => {
                            onAnimationComplete && onAnimationComplete();
                        }, 500);
                    }
                }}
            >
                {/* Box Lid */}
                <motion.div
                    className="box-lid"
                    animate={isAnimating ? {
                        y: [0, -30, -60],
                        rotateX: [0, -45, -90]
                    } : {}}
                    transition={{
                        delay: 2.5,
                        duration: 1,
                        ease: "easeOut"
                    }}
                />

                {/* Box Body */}
                <div className="box-body">
                    {/* Ribbon Lines */}
                    <div className="ribbon-vertical"></div>
                    <div className="ribbon-horizontal"></div>

                    {/* Bow */}
                    <div className="bow">
                        <div className="bow-left"></div>
                        <div className="bow-right"></div>
                        <div className="bow-center"></div>
                    </div>
                </div>
            </motion.div>

            {/* Explosion Particles */}
            {isAnimating && (
                <>
                    {/* Stars */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={`star-${i}`}
                            className="explosion-star"
                            initial={{
                                x: 0,
                                y: 0,
                                scale: 0,
                                rotate: 0,
                                opacity: 1
                            }}
                            animate={{
                                x: (Math.random() - 0.5) * 300,
                                y: (Math.random() - 0.5) * 300,
                                scale: [0, 1, 0],
                                rotate: Math.random() * 360,
                                opacity: [1, 1, 0]
                            }}
                            transition={{
                                delay: 3 + i * 0.1,
                                duration: 2 + Math.random(),
                                ease: "easeOut"
                            }}
                        />
                    ))}

                    {/* Circles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={`circle-${i}`}
                            className="explosion-circle"
                            initial={{
                                x: 0,
                                y: 0,
                                scale: 0,
                                opacity: 1
                            }}
                            animate={{
                                x: (Math.random() - 0.5) * 400,
                                y: (Math.random() - 0.5) * 400,
                                scale: [0, 1, 0],
                                opacity: [1, 1, 0]
                            }}
                            transition={{
                                delay: 3.2 + i * 0.05,
                                duration: 1.5 + Math.random(),
                                ease: "easeOut"
                            }}
                        />
                    ))}

                    {/* Lines */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={`line-${i}`}
                            className="explosion-line"
                            initial={{
                                x: 0,
                                y: 0,
                                scale: 0,
                                rotate: 0,
                                opacity: 1
                            }}
                            animate={{
                                x: (Math.random() - 0.5) * 350,
                                y: (Math.random() - 0.5) * 350,
                                scale: [0, 1, 0],
                                rotate: Math.random() * 360,
                                opacity: [1, 1, 0]
                            }}
                            transition={{
                                delay: 3.5 + i * 0.08,
                                duration: 2 + Math.random(),
                                ease: "easeOut"
                            }}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
