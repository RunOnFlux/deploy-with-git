import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Hello Flux" }];
};

export default function Index() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Hello from Flux! 👋
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#a0a0a0", marginBottom: "2rem" }}>
          This Remix app is running on the decentralized Flux Network.
        </p>
        <a
          href="https://runonflux.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            background: "#2563eb",
            color: "#fff",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Learn more about Flux
        </a>
      </div>
    </main>
  );
}
