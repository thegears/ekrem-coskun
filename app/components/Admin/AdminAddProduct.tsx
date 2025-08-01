import { Button, Input, Select } from "@mantine/core";
import { Form } from "react-router";

export default function AdminAddProduct() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Ürün Ekle</h1>
        <p className="text-gray-600 mb-4">
          Yeni bir ürün eklemek için aşağıdaki formu doldurun:
        </p>
      </div>
      <div className="flex justify-center items-center mb-4">
        <Form method="post" className="w-full max-w-md p-4 flex flex-col gap-4">
          <input type="hidden" name="formType" value="addProduct" />
          <input type="hidden" name="qWeWeQwE" value="aSaSsA" />

          <Input radius="xl" placeholder="İsim" name="name" required />
          <Input radius="xl" placeholder="Fiyat" name="price" required />
          <Select
            placeholder="Bir kategori seçin"
            radius="xl"
            name="category"
            data={[
              { value: "ekmek-arasi-lavas", label: "Ekmek Arası & Lavaş" },
              { value: "iskender-menu", label: "İskender Menü (İçecek Dahil)" },
              { value: "pilav-ustu", label: "Pilav Üstü" },
              { value: "kilo-ile-doner", label: "Kilo ile Döner" },
              { value: "tost", label: "Tost" },
              { value: "icecekler", label: "İçecekler" },
              { value: "dondurma", label: "Dondurma" },
            ]}
            required
          />
          <Input radius="xl" placeholder="Resim URL " name="image" required />
          <Button type="submit">Ekle</Button>
        </Form>
      </div>
    </div>
  );
}
