import {add, list} from "../storage.js";
import { findIndex } from "../helpers.js";

export default async function updateTask(id, description){
  const date = new Date().toLocaleString();
  const tasks = await list();
  const index = findIndex(tasks, id);
  tasks[index].description = description;
  tasks[index].updatedAt = date;
  await add(tasks, id);
}