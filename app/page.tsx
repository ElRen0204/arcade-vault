export default function Home() {
  return (
    <main className="av-main">
      <section className="av-hero">
        <h1 className="flicker">Arcade Vault</h1>
        <p className="sub">
          Insert coin to start<span className="blink">_</span>
        </p>
        <div className="detail-actions" style={{ justifyContent: "center" }}>
          <button className="btn lg pulse">Jugar</button>
          <button className="btn magenta lg">Salón de la fama</button>
        </div>
      </section>
    </main>
  );
}
