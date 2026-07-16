"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import {
  TODOS_INDEX_KEY,
  getRedisClient,
  getRedisStatus,
  todoKey,
  type RedisStatus,
} from "@/lib/redis";

export type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};

type StoredTodo = TodoItem;

export async function getRedisConnectionStatus(): Promise<RedisStatus> {
  return getRedisStatus();
}

export async function getTodos(): Promise<TodoItem[]> {
  const client = getRedisClient();

  if (!client) {
    return [];
  }

  try {
    const ids = await client.zrevrange(TODOS_INDEX_KEY, 0, -1);

    if (ids.length === 0) {
      return [];
    }

    const values = await client.mget(ids.map(todoKey));
    const todos: TodoItem[] = [];

    for (const value of values) {
      if (!value) {
        continue;
      }

      const todo = JSON.parse(value) as StoredTodo;
      todos.push(todo);
    }

    return todos;
  } catch (error) {
    console.error("[redis] Failed to load todos", error);
    return [];
  }
}

export async function addTodo(formData: FormData): Promise<void> {
  const title = formData.get("title")?.toString().trim();

  if (!title) {
    return;
  }

  const client = getRedisClient();

  if (!client) {
    console.error("[redis] Cannot add todo: client unavailable");
    return;
  }

  const todo: StoredTodo = {
    id: randomUUID(),
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  try {
    const score = Date.parse(todo.createdAt);

    await client
      .multi()
      .set(todoKey(todo.id), JSON.stringify(todo))
      .zadd(TODOS_INDEX_KEY, score, todo.id)
      .exec();

    revalidatePath("/");
  } catch (error) {
    console.error("[redis] Failed to add todo", error);
  }
}

export async function toggleTodo(id: string, completed: boolean): Promise<void> {
  const client = getRedisClient();

  if (!client) {
    console.error("[redis] Cannot update todo: client unavailable");
    return;
  }

  try {
    const existing = await client.get(todoKey(id));

    if (!existing) {
      return;
    }

    const todo = JSON.parse(existing) as StoredTodo;
    todo.completed = completed;

    await client.set(todoKey(id), JSON.stringify(todo));
    revalidatePath("/");
  } catch (error) {
    console.error("[redis] Failed to update todo", error);
  }
}

export async function deleteTodo(id: string): Promise<void> {
  const client = getRedisClient();

  if (!client) {
    console.error("[redis] Cannot delete todo: client unavailable");
    return;
  }

  try {
    await client.multi().del(todoKey(id)).zrem(TODOS_INDEX_KEY, id).exec();
    revalidatePath("/");
  } catch (error) {
    console.error("[redis] Failed to delete todo", error);
  }
}
