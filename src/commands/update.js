import {add, list} from "../storage.js";
import { findIndex, verifyIndex } from "../helpers.js";
import Error404 from "../erro/Error404.js";

export default async function updateTask(id, description){
  const date = new Date().toLocaleString();
  const tasks = await list();
  const index = findIndex(tasks, id);
  if(!verifyIndex(index)){
    throw new Error404();
  }
  tasks[index].description = description;
  tasks[index].updatedAt = date;
  await add(tasks, id);
}