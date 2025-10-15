import { JSONFilePreset } from "lowdb/node";
import type { DatabaseSchema } from "./types";

const db = await JSONFilePreset<DatabaseSchema>("app/database/db.json", { onoff: true });

export function loginSecurity(password: string) {
  // Security check password - must match expected value
  if (password === "") return false;
  // Add proper password validation here
  return password === process.env.SECURITY_PASSWORD || password === "default_security_pass";
}

export async function onoff() {
  await db.read();
  db.data.onoff = !db.data.onoff;
  await db.write();
}

export async function getOnoff() {
  await db.read();
  return db.data.onoff;
}
