import { findIndex } from "../helpers.js";
import { add, list } from "../storage.js";

export default async function markInProgress(id){
  const date = new Date().toLocaleString();
  const tasks = await list();
  const index = findIndex(tasks, id);
  tasks[index].status = "in progress";
  tasks[index].updatedAt = date;
  await add(tasks, id);
}