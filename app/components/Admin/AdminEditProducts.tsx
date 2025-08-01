import { Accordion, Button, Divider, Input, Select } from "@mantine/core";
import { useState } from "react";
import { Form, useLoaderData } from "react-router";
import type { loader } from "~/routes/admin";

export default function AdminEditProducts() {
  const { products } = useLoaderData<typeof loader>();

  const [items, setItems] = useState(
    products.map((item) => (
      <Accordion.Item key={item.name} value={item.name}>
        <Accordion.Control>{item.name}</Accordion.Control>
        <Accordion.Panel>
          <Form method="post" className="flex flex-col gap-4">
            <input type="hidden" name="formType" value="editProduct" />
            <input type="hidden" name="name" value={item.name} />
            <input type="hidden" name="qWeWeQwE" value="aSaSsA" />
            İsim:
            <Input
              variant="unstyled"
              radius="xs"
              placeholder={item.name}
              name="newName"
            />
            Fiyat:
            <Input
              variant="unstyled"
              radius="xs"
              placeholder={item.price}
              name="newPrice"
            />
            <Button type="submit" className="mt-4">
              Düzenle
            </Button>
          </Form>
          <Form method="post" className="flex flex-col gap-4 mt-4">
            <input type="hidden" name="formType" value="removeProduct" />
            <input type="hidden" name="name" value={item.name} />
            <input type="hidden" name="qWeWeQwE" value="aSaSsA" />

            <Button type="submit" color="red">
              Kaldır
            </Button>
          </Form>
        </Accordion.Panel>
      </Accordion.Item>
    ))
  );

  async function inputSearch(value: string) {
    const searchValue = value.toLowerCase();
    const filteredItems = products.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setItems(
      filteredItems.map((item) => (
        <Accordion.Item key={item.name} value={item.name}>
          <Accordion.Control>{item.name}</Accordion.Control>
          <Accordion.Panel>
            <Form method="post" className="flex flex-col gap-4">
              <input type="hidden" name="formType" value="editProduct" />
              <input type="hidden" name="name" value={item.name} />
              <input type="hidden" name="qWeWeQwE" value="aSaSsA" />
              İsim:
              <Input
                variant="unstyled"
                radius="xs"
                placeholder={item.name}
                name="newName"
              />
              Fiyat:
              <Input
                variant="unstyled"
                radius="xs"
                placeholder={item.price}
                name="newPrice"
              />
              <Button type="submit" className="mt-4">
                Düzenle
              </Button>
            </Form>
            <Form method="post" className="flex flex-col gap-4 mt-4">
              <input type="hidden" name="formType" value="removeProduct" />
              <input type="hidden" name="name" value={item.name} />
              <input type="hidden" name="qWeWeQwE" value="aSaSsA" />
              <Button type="submit" color="red">
                Kaldır
              </Button>
            </Form>
          </Accordion.Panel>
        </Accordion.Item>
      ))
    );
  }

  return (
    <div className="p-4">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Ürünleri Düzenle</h1>
        <p className="text-gray-600 mb-4">
          Ürünleri düzenlemek veya kaldırmak için kullanın:
        </p>
      </div>
      <div className="flex justify-center items-center mb-4">
        <Input
          className="mt-4"
          onChange={(e) => inputSearch(e.target.value)}
          placeholder="Ara..."
          radius="xl"
        ></Input>
      </div>
      <Accordion defaultValue="Apples">{items}</Accordion>
    </div>
  );
}
