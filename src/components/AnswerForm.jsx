import { useState } from "react";

function AnswerForm({ clue, onCorrect }) {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const normalize = (text) => {
    return text
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedAnswer = normalize(answer);

    const isCorrect = clue.answers.some(
      (correctAnswer) =>
        normalize(correctAnswer) === normalizedAnswer
    );

    if (isCorrect) {
      setError("");
      onCorrect();
    } else {
      setError("Ez nem a helyes megfejtés. Próbáld újra!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="answer-form">
      <input
        type="text"
        placeholder="Írd be a megfejtést..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button type="submit">
        ELLENŐRZÉS
      </button>

      {error && (
        <p className="error">
          {error}
        </p>
      )}
    </form>
  );
}

export default AnswerForm;