function LettersDisplay() {
  const letters = ["I", "S", "T", "E", "N"];

  return (
    <div className="letters-container">
      <p>MEGSZERZETT BETŰK</p>

      <div className="letters">
        {letters.map((letter, index) => {
          const savedLetter = localStorage.getItem(
            `treasure-letter-${index + 1}`
          );

          return (
            <div
              className={`letter ${
                savedLetter ? "unlocked" : ""
              }`}
              key={index}
            >
              {savedLetter || "?"}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LettersDisplay;