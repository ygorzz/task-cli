#!/usr/bin/env node
import { Command } from "commander";
import addTarefa from "./commands/add.js";
import listaTarefas from "./commands/list.js";
import trataErros from "./erro/trataErros.js";
import atualizaTarefa from "./commands/update.js";
import removeTarefa from "./commands/delete.js";
import marcaEmProgresso from "./commands/markInProgress.js";
import marcaComoConcluida from "./commands/markDone.js";
import listaTarefasDone from "./commands/listDone.js";
import listaTarefasInProgress from "./commands/listInProgress.js";
import listaTarefasToDo from "./commands/listToDo.js";
import marcaToDo from "./commands/markToDo.js";

const program = new Command();

program.version("0.0.1");

program
  .command("add")
  .argument("<descricao>")
  .action(async (descricao) => {
    try {
      await addTarefa(descricao);
    } catch (e) {
      trataErros(e);
    }
  });

program
  .command("list")
  .action(async () => {
    try {
      const tarefas = await listaTarefas();
      console.log(tarefas);
    } catch (e) {
      trataErros(e);
    }
  });

program
  .command("list-in-progress")
  .action(async () => {
    try {
      const tarefasInProgress = await listaTarefasInProgress();
      console.log(tarefasInProgress);
    } catch (error) {
      trataErros(error);
    }
  });

program
  .command("list-todo")
  .action(async () => {
    try {
      const tarefasToDo = await listaTarefasToDo();
      console.log(tarefasToDo);
    } catch (error) {
      trataErros(error);
    }
  });

program
  .command("update")
  .argument("<id>")
  .argument("<descricao>")
  .action(async (id, descricao) => {
    try {
      await atualizaTarefa(id, descricao);
      console.log("Tarefa atualizada com sucesso!");
    } catch (e) {
      trataErros(e);
    }
  });

program
  .command("delete")
  .argument("<id>")
  .action(async (id) => {
    try {
      await removeTarefa(id);
      console.log("Tarefa removida com sucesso!");
    } catch (error) {
      trataErros(error);
    }
  });

program
  .command("mark-todo")
  .argument("<id>")
  .action(async (id) => {
    try {
      await marcaToDo(id);
      console.log("Tarefas marcada como 'todo'.");
    } catch (error) {
      trataErros(error);
    }
  });

program
  .command("mark-in-progress")
  .argument("<id>")
  .action(async (id) => {
    try {
      await marcaEmProgresso(id);
      console.log("Tarefa marcada como 'in progress'.");
    } catch (error) {
      trataErros(error);
    }
  });

program
  .command("mark-done")
  .argument("<id>")
  .action(async (id) => {
    try {
      await marcaComoConcluida(id);
      console.log("Tarefas marcada como 'done'.");
    } catch (error) {
      trataErros(error);
    }
  });

program
  .command("list-done")
  .action(async () => {
    try {
      const tarefasDone = await listaTarefasDone();
      console.log(tarefasDone);
    } catch (error) {
      trataErros(error);
    }
  });


program.parseAsync();