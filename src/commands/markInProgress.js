import { findIndex } from "../helpers.js";
import { add } from "../storage.js";
import listaTarefas from "./list.js";

export default async function marcaEmProgresso(id){
  const date = new Date().toLocaleString();
  const tarefas = await listaTarefas();
  const index = findIndex(tarefas, id);
  tarefas[index].status = "in progress";
  tarefas[index].updatedAt = date;
  await add(tarefas, id);
  console.log("Tarefa marcada como 'in progress'.");
}