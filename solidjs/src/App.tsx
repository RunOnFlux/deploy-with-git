export default function App() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Hello from Flux! 👋</h1>
        <p style={styles.subtitle}>
          This Solid.js app is running on the decentralized Flux Network.
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
    "align-items": "center",
    "justify-content": "center",
    "min-height": "100vh",
    background: "#0a0a0a",
    color: "#ededed",
    "font-family": "sans-serif",
    margin: "0",
  },
  card: {
    "text-align": "center",
    padding: "2rem",
  },
  title: {
    "font-size": "3rem",
    "margin-bottom": "1rem",
  },
  subtitle: {
    "font-size": "1.25rem",
    color: "#a0a0a0",
    "margin-bottom": "2rem",
  },
  btn: {
    display: "inline-block",
    padding: "0.75rem 2rem",
    background: "#2563eb",
    color: "#fff",
    "border-radius": "0.5rem",
    "text-decoration": "none",
    "font-size": "1rem",
  },
} as const;
