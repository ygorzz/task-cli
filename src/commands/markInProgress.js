import { findIndex } from "../helpers.js";
import { add, list } from "../storage.js";

export default async function marcaEmProgresso(id){
  const date = new Date().toLocaleString();
  const tarefas = await list();
  const index = findIndex(tarefas, id);
  tarefas[index].status = "in progress";
  tarefas[index].updatedAt = date;
  await add(tarefas, id);
}