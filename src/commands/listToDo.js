import { filtraTarefasPorStatus } from "../helpers.js";
import { list } from "../storage.js";

export default async function listaTarefasToDo(){ 
  const tarefas = await list();
  const tarefasFiltradas = filtraTarefasPorStatus(tarefas, "todo");
  return tarefasFiltradas;
}