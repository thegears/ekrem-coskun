import { Button, Input } from "@mantine/core";
import { Form } from "react-router";

export default function AdminChangePassword() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Yönetici Şifre Değiştir</h1>
        <p className="text-gray-600 mb-4">
          Şifrenizi değiştirmek için aşağıdaki formu doldurun:
        </p>
      </div>
      <div className="flex justify-center items-center mb-4">
        <Form method="post" className="w-full max-w-md p-4 flex flex-col gap-4">
          <input type="hidden" name="formType" value="changePassword" />
          <input type="hidden" name="qWeWeQwE" value="aSaSsA" />

          <Input
            radius="xl"
            placeholder="Yeni Şifre"
            name="newPassword"
            required
          />
          <Button type="submit">Şifreyi Değiştir</Button>
        </Form>
      </div>
    </div>
  );
}
