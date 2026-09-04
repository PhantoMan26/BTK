function ClueCard({ clue }) {
  return (
    <div className="clue-card">
      <div className="station">
        ÁLLOMÁS {clue.station} / 5
      </div>

      <div className="divider"></div>

      <p className="clue-text">
        {clue.clue}
      </p>
    </div>
  );
}

export default ClueCard;