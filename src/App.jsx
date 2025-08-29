import { useState } from "react";
import "./App.css";
import { motion } from "motion/react"
import AnimatedGift from "./components/AnimatedGift";
import "./components/AnimatedGift.css";
// GIF wird aus dem public Ordner geladen
const cat = "/GIF-Bild.gif";


export default function App() {

  const [presentOpen, setPresentOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePresent = () => {
    setPresentOpen(!presentOpen);
  }
  const handleButtonClick = async () => {
    setIsAnimating(true);
    // handlePresent() wird jetzt von der AnimatedGift Komponente aufgerufen
    // nachdem die Animation abgeschlossen ist
  }

  return (
    <div className="App">
      {!presentOpen ? (
        <>
          {console.log("present closed")}

          <motion.button
            className="gift-button"
            animate={isAnimating ? { scale: 2.0, rotate: 360 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.9 }}
            whileHover={!isAnimating ? { scale: 1.1 } : {}}
            onClick={handleButtonClick}
          >

            <AnimatedGift
              isAnimating={isAnimating}
              onAnimationComplete={() => {
                // Nach der Animation das Geschenk öffnen
                setTimeout(() => {
                  handlePresent();
                }, 1000);
              }}
            />

          </motion.button>

        </>
      ) : (
        <Present />
      )}
    </div>
  );
}

function Present() {
  return (
    <div className="present-container">
      {console.log("present opened")}
      <h4 className="birthday-title">Happy Birthday!</h4>

      <motion.img
        src={cat}
        className="cat-gif"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0, duration: 0.8 }}
      />

      <h4 className="birthday-message">
        Von Herzen alles Liebe zum Geburtstag wünscht dir dein Favorite Jerk 🐸 <br />
      </h4>
      <h3 className="love-message">Ich Liebe Dich ❤️</h3>
    </div>
  );
}