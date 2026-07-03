"use client";

import { useTransition } from "react";
import type { TodoItem } from "@/app/actions/todos";
import { addTodo, deleteTodo, toggleTodo } from "@/app/actions/todos";

type TodoListProps = {
  initialTodos: TodoItem[];
  redisStatus: "ready" | "connecting" | "unavailable";
};

export default function TodoList({ initialTodos, redisStatus }: TodoListProps) {
  const [isPending, startTransition] = useTransition();
  const redisOffline = redisStatus !== "ready";

  return (
    <section style={{ width: "100%", maxWidth: "640px" }}>
      {redisOffline && (
        <p
          style={{
            margin: "0 0 1.5rem",
            padding: "0.875rem 1rem",
            borderRadius: "0.5rem",
            background: "#1c1917",
            border: "1px solid #44403c",
            color: "#fbbf24",
            lineHeight: 1.5,
          }}
        >
          {redisStatus === "connecting"
            ? "Redis is still coming online. The app will keep retrying in the background."
            : "Redis is currently unavailable. The app stays running and will reconnect automatically."}
        </p>
      )}

      <form
        action={(formData) => {
          startTransition(async () => {
            await addTodo(formData);
          });
        }}
        style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}
      >
        <input
          name="title"
          type="text"
          placeholder="What needs to be done?"
          required
          disabled={isPending || redisOffline}
          style={{
            flex: 1,
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid #333",
            background: "#111",
            color: "#ededed",
            fontSize: "1rem",
          }}
        />
        <button
          type="submit"
          disabled={isPending || redisOffline}
          style={{
            padding: "0.75rem 1.25rem",
            borderRadius: "0.5rem",
            border: "none",
            background: redisOffline ? "#404040" : "#2563eb",
            color: "#fff",
            fontSize: "1rem",
            cursor: isPending || redisOffline ? "not-allowed" : "pointer",
          }}
        >
          Add
        </button>
      </form>

      {initialTodos.length === 0 ? (
        <p style={{ color: "#737373", textAlign: "center" }}>
          {redisOffline
            ? "No todos loaded yet. They will appear once Redis is ready."
            : "No todos yet. Add one above."}
        </p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {initialTodos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.875rem 1rem",
                borderRadius: "0.5rem",
                background: "#141414",
                border: "1px solid #262626",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                disabled={isPending || redisOffline}
                onChange={() => {
                  startTransition(async () => {
                    await toggleTodo(todo.id, !todo.completed);
                  });
                }}
              />
              <span
                style={{
                  flex: 1,
                  color: todo.completed ? "#737373" : "#ededed",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
              <button
                type="button"
                disabled={isPending || redisOffline}
                onClick={() => {
                  startTransition(async () => {
                    await deleteTodo(todo.id);
                  });
                }}
                style={{
                  padding: "0.375rem 0.75rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #404040",
                  background: "transparent",
                  color: "#f87171",
                  cursor: isPending || redisOffline ? "not-allowed" : "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
