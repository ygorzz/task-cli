import { findIndex } from "../helpers.js";
import { add, list} from "../storage.js";

export default async function markDone(id) {
  const date = new Date().toLocaleString();
  const tasks = await list();
  const index = findIndex(tasks, id);
  tasks[index].status = "done";
  tasks[index].updatedAt = date;
  await add(tasks, id);
}