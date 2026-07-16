export default function App() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Hello from Flux! 👋</h1>
        <p style={styles.subtitle}>
          This React app is running on the decentralized Flux Network.
        </p>
        <a
          href="https://runonflux.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.btn}
        >
          Learn more about Flux
        </a>
      </div>
    </main>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#0a0a0a",
    color: "#ededed",
    fontFamily: "sans-serif",
    margin: 0,
  },
  card: {
    textAlign: "center",
    padding: "2rem",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#a0a0a0",
    marginBottom: "2rem",
  },
  btn: {
    display: "inline-block",
    padding: "0.75rem 2rem",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "0.5rem",
    textDecoration: "none",
    fontSize: "1rem",
  },
};
