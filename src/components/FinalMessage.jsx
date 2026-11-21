export default function FinalMessage({ title, message, signature, replayText, onReplay }) {
  return (
    <section className="final-message" aria-live="polite">
      <h2 className="final-title">{title}</h2>
      <p className="final-text">{message}</p>
      <p className="final-signature">{signature}</p>
      <button type="button" className="btn btn-ghost" onClick={onReplay}>
        {replayText}
      </button>
    </section>
  );
}
