import Login from "~/components/Admin/Login";
import Panel from "~/components/Admin/Panel";
import type { Route } from "../+types/root";
import {
  addProduct,
  editProduct,
  getAdminPassword,
  getAllProducts,
  removeProduct,
  setAdminPassword,
} from "~/database/db";
import { useActionData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin" },
    { name: "description", content: "Ekrem Coşkun Akşehir" },
  ];
}

export async function loader() {
  const products = await getAllProducts();
  return { products };
}
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const formType = formData.get("formType");
  const check = formData.get("qWeWeQwE");

  if (check !== "aSaSsA") {
    return { success: false, formType: "login", error: "Geçersiz istek" };
  }

  if (formType === "login") {
    const password = formData.get("password");
    const adminPassword = await getAdminPassword();
    if (password === adminPassword) {
      return { success: true, formType: "login" };
    } else {
      return { success: false, formType: "login", error: "Geçersiz şifre" };
    }
  } else if (formType === "addProduct") {
    const name = formData.get("name");
    const price = formData.get("price");
    const category = formData.get("category");
    const image = formData.get("image");

    if (name && price && category) {
      await addProduct(
        category as string,
        name as string,
        price as string,
        image as string
      );
      return { success: true, formType: "addProduct" };
    } else {
      return { success: false, formType: "addProduct", error: "Eksik bilgi" };
    }
  } else if (formType === "removeProduct") {
    const name = formData.get("name");
    if (name) {
      removeProduct(name as string);
      return { success: true, formType: "removeProduct" };
    } else {
      return {
        success: false,
        formType: "removeProduct",
        error: "Eksik bilgi",
      };
    }
  } else if (formType === "editProduct") {
    const name = formData.get("name");
    const newName = formData.get("newName");
    const newPrice = formData.get("newPrice");

    editProduct(name as string, newName as string, newPrice as string);
    return { success: true, formType: "editProduct" };
  } else if (formType === "changePassword") {
    const newPassword = formData.get("newPassword");
    if (newPassword) {
      await setAdminPassword(newPassword as string);
      return { success: true, formType: "changePassword" };
    } else {
      return {
        success: false,
        formType: "changePassword",
        error: "Yeni şifre girilmedi",
      };
    }
  }
}

export default function Admin() {
  const actionData = useActionData();
  return (
    <>
      {actionData?.formType === "login" && actionData?.success ? (
        <Panel />
      ) : (
        <Login />
      )}
    </>
  );
}
