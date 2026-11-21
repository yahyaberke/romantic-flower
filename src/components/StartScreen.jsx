export default function StartScreen({ title, buttonText, onStart }) {
  return (
    <section className="start-screen fade-in">
      <div className="start-bud" aria-hidden="true">🌷</div>
      <h1 className="start-title">{title}</h1>
      <button type="button" className="btn btn-primary pulse" onClick={onStart}>
        {buttonText}
      </button>
    </section>
  );
}
