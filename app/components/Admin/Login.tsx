import { Button, Input } from "@mantine/core";
import { Form, useActionData } from "react-router";

export default function Login() {
  const actionData = useActionData();
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-3xl font-bold mb-4">Yönetici Girişi</h1>
      <Form method="post">
        <input type="hidden" name="formType" value="login" />
        <div className="flex flex-col w-80">
          <Input
            type="text"
            name="password"
            size="md"
            radius="xl"
            placeholder="Yönetici Şifresi Girin."
            error={actionData?.error}
          />
          <Button type="submit" className="mt-4">
            Giriş Yap
          </Button>
          {actionData?.error && (
            <div className="text-red-500 mt-2">{actionData.error}</div>
          )}
        </div>
      </Form>
    </div>
  );
}
