import { findIndex } from "../helpers.js";
import { add } from "../storage.js";
import listaTarefas from "./list.js";

export default async function marcaComoConcluida(id) {
  const date = new Date().toLocaleString();
  const tarefas = await listaTarefas();
  const index = findIndex(tarefas, id);
  tarefas[index].status = "done";
  tarefas[index].updatedAt = date;
  await add(tarefas, id);
  console.log("Tarefas marcada como 'done'.");
}