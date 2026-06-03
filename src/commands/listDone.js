import { filtraTarefasPorStatus } from "../helpers.js";
import { list } from "../storage.js";

export default async function listaTarefasDone(){
  const tarefas = await list();
  const tarefasFiltradas = filtraTarefasPorStatus(tarefas, "done");
  return tarefasFiltradas;
}