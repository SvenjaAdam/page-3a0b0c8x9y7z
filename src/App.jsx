import { useState } from "react";
import "./App.css";
import { motion } from "motion/react"
import AnimatedGift from "./components/AnimatedGift";
import "./components/AnimatedGift.css";
// GIF wird direkt von GitHub Pages geladen - NEUER PFAD
const cat = "https://svenjaadam.github.io/page-3a0b0c8x9y7z/GIF-Bild.gif";


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

      <img
        src="https://svenjaadam.github.io/page-3a0b0c8x9y7z/GIF-Bild.gif"
        className="cat-gif"
        alt="Cat GIF"
        style={{ width: '200px', height: 'auto' }}
        onError={(e) => {
          console.log('GIF failed to load, trying alternative path');
          e.target.src = './GIF-Bild.gif';
        }}
        onLoad={() => console.log('GIF loaded successfully!')}
      />

      <h4 className="birthday-message">
        Von Herzen alles Liebe zum Geburtstag wünscht dir dein Favorite Jerk 🐸 <br />
      </h4>
      <h3 className="love-message">Ich Liebe Dich ❤️</h3>
    </div>
  );
}