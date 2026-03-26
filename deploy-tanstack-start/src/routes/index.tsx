import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        background: "#f4f4f4",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#2563eb" }}>Hello, Flux!</h1>
    </main>
  );
}
