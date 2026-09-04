import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import { clues } from "../data/clues";

import ClueCard from "../components/ClueCard";
import AnswerForm from "../components/AnswerForm";

function HuntPage() {
  const { clueId } = useParams();

  const clue = clues[clueId];

  const [solved, setSolved] = useState(() => {
    return localStorage.getItem(
      `solved-${clueId}`
    ) === "true";
  });

  if (!clue) {
    return (
      <div className="page">
        <h1>Ez a nyom nem létezik.</h1>
      </div>
    );
  }

  const handleCorrect = () => {
    localStorage.setItem(
      `solved-${clueId}`,
      "true"
    );

    localStorage.setItem(
      `treasure-letter-${clue.station}`,
      clue.letter
    );

    setSolved(true);
  };

  return (
    <main className="page">

      <div className="container">

        <div className="logo">
          <span></span>
          BTK - KINCSVADÁSZAT
        </div>


        <ClueCard clue={clue} />

        {!solved ? (
          <AnswerForm
            clue={clue}
            onCorrect={handleCorrect}
          />
        ) : (
          <div className="success-card">

            <h2>HELYES MEGFEJTÉS!</h2>

            <p>Megszerezted a következő betűt:</p>

            <div className="big-letter">
              {clue.letter}
            </div>

            {clue.nextClue ? (
              <div className="next-clue">
                <h3>KÖVETKEZŐ NYOM</h3>

                <p>
                  {clue.nextClue}
                </p>
              </div>
            ) : (
              <Link
                to="/final"
                className="final-button"
              >
                UTOLSÓ PRÓBA →
              </Link>
            )}
          </div>
        )}

      </div>
    </main>
  );
}

export default HuntPage;