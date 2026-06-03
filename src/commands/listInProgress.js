import { filtraTarefasPorStatus } from "../helpers.js";
import { list } from "../storage.js";

export default async function listaTarefasInProgress(){ 
  const tarefas = await list();
  const tarefasFiltradas = filtraTarefasPorStatus(tarefas, "in progress");
  return tarefasFiltradas;
}