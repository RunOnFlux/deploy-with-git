"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

export async function getTodos(): Promise<TodoItem[]> {
  return prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function addTodo(formData: FormData): Promise<void> {
  const title = formData.get("title")?.toString().trim();

  if (!title) {
    return;
  }

  await prisma.todo.create({
    data: { title },
  });

  revalidatePath("/");
}

export async function toggleTodo(id: string, completed: boolean): Promise<void> {
  await prisma.todo.update({
    where: { id },
    data: { completed },
  });

  revalidatePath("/");
}

export async function deleteTodo(id: string): Promise<void> {
  await prisma.todo.delete({
    where: { id },
  });

  revalidatePath("/");
}
