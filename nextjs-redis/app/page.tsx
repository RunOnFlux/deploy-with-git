import TodoList from "@/app/components/TodoList";
import { getRedisConnectionStatus, getTodos } from "@/app/actions/todos";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [todos, redisStatus] = await Promise.all([
    getTodos(),
    getRedisConnectionStatus(),
  ]);

  const statusLabel =
    redisStatus === "ready"
      ? "Connected"
      : redisStatus === "connecting"
        ? "Connecting"
        : "Unavailable";

  const statusColor =
    redisStatus === "ready"
      ? "#4ade80"
      : redisStatus === "connecting"
        ? "#fbbf24"
        : "#f87171";

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "3rem 1.5rem",
        fontFamily: "sans-serif",
        background: "#0a0a0a",
        color: "#ededed",
      }}
    >
      <div style={{ width: "100%", maxWidth: "640px" }}>
        <p
          style={{
            margin: "0 0 0.5rem",
            fontSize: "0.875rem",
            color: "#737373",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Flux Network
        </p>
        <h1 style={{ fontSize: "2.5rem", margin: "0 0 0.75rem" }}>
          Next.js + Redis Todos
        </h1>
        <p style={{ margin: "0 0 1rem", color: "#a3a3a3", lineHeight: 1.6 }}>
          This demo stores todos in Redis. Flux provides the connection via the{" "}
          <code>REDIS_URL</code> environment variable.
        </p>
        <p
          style={{
            margin: "0 0 2rem",
            color: "#a3a3a3",
            lineHeight: 1.6,
          }}
        >
          Redis status:{" "}
          <span style={{ color: statusColor, fontWeight: 600 }}>{statusLabel}</span>
        </p>
        <TodoList initialTodos={todos} redisStatus={redisStatus} />
      </div>
    </main>
  );
}
