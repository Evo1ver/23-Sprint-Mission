"use server";
import { revalidatePath } from "next/cache";

import { itemsApi } from "@/api/todo-items";

export async function postTodoItem(formData: FormData) {
  const name = String(formData.get("name"));
  await itemsApi.create({ name });

  revalidatePath("/boards");
}

export async function toggleTodoItem(id: number, isCompleted: boolean) {
  await itemsApi.update(id, { isCompleted });
  revalidatePath("/boards");
}
