import { Button, Input } from "@mantine/core";
import { Form } from "react-router";
import type { Route } from "../+types/root";
import { loginSecurity } from "~/database/security";
import { useActionData } from "react-router";
import { onoff } from "~/database/security";
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const formType = formData.get("formType");

  if (formType == "login") {
    const formPassword = formData.get("password");

    const check = loginSecurity(formPassword);

    return check;
  } else if (formType == "onoff") {
    if (formData.get("qwe") == "qwe") {
      await onoff();
    } else return false;
  }
}

export default function Security() {
  const actionData = useActionData();

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      {actionData ? (
        <div>
          <Form method="post">
            <input type="hidden" name="formType" value="onoff" />
            <input type="hidden" name="qwe" value="qwe" />
            <Button type="submit" className="mt-4">
              Kapat/Aç
            </Button>
          </Form>
        </div>
      ) : (
        <Form method="post">
          <input type="hidden" name="formType" value="login" />
          <div className="flex flex-col w-80">
            <Input
              type="text"
              name="password"
              size="md"
              radius="xl"
              placeholder="Security Şifresi Girin."
            />
            <Button type="submit" className="mt-4">
              Giriş Yap
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
}
