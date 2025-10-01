import { JSONFilePreset } from "lowdb/node";
type dataType = {
  adminPassword?: string;
  products?: {
    category: string;
    name: string;
    price: string;
    image?: string;
  }[];
  onoff: boolean;
};
const db = await JSONFilePreset<dataType>("app/database/db.json", {});

export function loginSecurity(password: string) {
  if (password == "") return true;
  else return false;
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
