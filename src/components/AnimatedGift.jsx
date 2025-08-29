import { motion } from "motion/react";
import "./AnimatedGift.css";

export default function AnimatedGift({ isAnimating, onAnimationComplete }) {
    const confettiColors = ['confetti-red', 'confetti-teal', 'confetti-blue', 'confetti-green', 'confetti-yellow', 'confetti-pink'];

    return (
        <div className="gift-container">
            {/* Animated Gift Box */}
            <motion.div
                className="gift-box"
                initial={{ scale: 1, rotate: 0 }}
                animate={isAnimating ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, -15, 15, 0]
                } : { scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.0,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                }}
                onAnimationComplete={() => {
                    if (isAnimating) {
                        // Wait for explosion to complete before calling callback
                        setTimeout(() => {
                            onAnimationComplete && onAnimationComplete();
                        }, 2000);
                    }
                }}
            >
                {/* Gift Bow */}
                <motion.div
                    className="gift-bow"
                    initial={{ scale: 0 }}
                    animate={isAnimating ? { scale: 1 } : { scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                >
                    {/* Left loop - goes up and left */}
                    <div className="bow-loop-left"></div>

                    {/* Right loop - goes up and right */}
                    <div className="bow-loop-right"></div>

                    {/* Left ribbon - goes down and left */}
                    <div className="ribbon-left"></div>

                    {/* Right ribbon - goes down and right */}
                    <div className="ribbon-right"></div>
                </motion.div>

                {/* Explosion Animation - only when opening */}
                {isAnimating && (
                    <>
                        {/* Explosion Flash */}
                        <motion.div
                            className="explosion-flash"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 2, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                delay: 1.3,
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                        />

                        {/* Explosion Particles */}
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={`explosion-${i}`}
                                className="explosion-particle"
                                initial={{
                                    x: 0,
                                    y: 0,
                                    scale: 0,
                                    opacity: 1
                                }}
                                animate={{
                                    x: (Math.random() - 0.5) * 200,
                                    y: (Math.random() - 0.5) * 200,
                                    scale: [0, 1, 0],
                                    opacity: [1, 1, 0]
                                }}
                                transition={{
                                    delay: 1.3 + i * 0.02,
                                    duration: 1.5 + Math.random(),
                                    ease: "easeOut"
                                }}
                            />
                        ))}

                        {/* Confetti from Explosion */}
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={`confetti-${i}`}
                                className={`confetti-piece ${confettiColors[Math.floor(Math.random() * confettiColors.length)]}`}
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
                                    scale: [0, 1, 0.8],
                                    rotate: Math.random() * 720,
                                    opacity: [1, 1, 0]
                                }}
                                transition={{
                                    delay: 1.8 + i * 0.05,
                                    duration: 3 + Math.random() * 2,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </>
                )}
            </motion.div>
        </div>
    );
}
