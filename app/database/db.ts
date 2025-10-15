import { JSONFilePreset } from "lowdb/node";
import type { DatabaseSchema } from "./types";

const db = await JSONFilePreset<DatabaseSchema>("app/database/db.json", { onoff: true });

export async function getAdminPassword() {
  await db.read();
  return db.data.adminPassword;
}

export async function getProducts(category?: string) {
  await db.read();
  return (
    db.data.products?.filter((product) => {
      return product.category === category;
    }) || []
  );
}

export async function getAllProducts() {
  await db.read();
  return db.data.products || [];
}

export async function addProduct(
  category: string,
  name: string,
  price: string,
  image?: string
) {
  await db.read();
  const newProduct = { category, name, price, image };
  db.data.products?.push(newProduct);
  await db.write();
}

export async function removeProduct(name: string) {
  await db.read();
  db.data.products = db.data.products?.filter(
    (product) => product.name !== name
  );
  await db.write();
}
export async function editProduct(
  name: string,
  newName: string,
  newPrice: string
) {
  await db.read();
  const product = db.data.products?.find((product) => product.name === name);
  if (product) {
    if (newName) product.name = newName;
    if (newPrice) product.price = newPrice;
    await db.write();
  }
}
export async function setAdminPassword(password: string) {
  await db.read();
  db.data.adminPassword = password;
  await db.write();
}
