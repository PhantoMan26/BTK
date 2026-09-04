import { useState } from "react";

import LettersDisplay from "../components/LettersDisplay";
import { finalAnswer } from "../data/clues";

function FinalPage() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      answer.trim().toUpperCase() ===
      finalAnswer
    ) {
      setResult("win");
    } else {
      setResult("wrong");
    }
  };

  return (
    <main className="page">
      <div className="container">

        <div className="logo">
          BTK - KINCSVADÁSZAT
        </div>

        <div className="final-card">

          {!result && (
            <>
              <form
                onSubmit={handleSubmit}
                className="answer-form"
              >
                <input
                  type="text"
                  placeholder="A végső megfejtés..."
                  value={answer}
                  onChange={(e) =>
                    setAnswer(e.target.value)
                  }
                />

                <button type="submit">
                  VÉGSŐ MEGFEJTÉS
                </button>
              </form>
            </>
          )}

          {result === "wrong" && (
            <>

              <button
                onClick={() => setResult(null)}
              >
                PRÓBÁLD ÚJRA
              </button>
            </>
          )}

          {result === "win" && (
            <div className="victory">

              <h1>GYŐZTETEK!</h1>


              <div className="final-word">
                ISTEN
              </div>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}

export default FinalPage;