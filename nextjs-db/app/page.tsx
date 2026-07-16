import TodoList from "@/app/components/TodoList";
import { getTodos } from "@/app/actions/todos";

export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await getTodos();

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
          Next.js + PostgreSQL Todos
        </h1>
        <p style={{ margin: "0 0 2rem", color: "#a3a3a3", lineHeight: 1.6 }}>
          This demo stores todos in PostgreSQL. Flux provides the database
          connection via the <code>DATABASE_URL</code> environment variable.
        </p>
        <TodoList initialTodos={todos} />
      </div>
    </main>
  );
}
