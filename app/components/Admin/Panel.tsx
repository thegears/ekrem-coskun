import { Tabs } from "@mantine/core";
import AdminEditProducts from "./AdminEditProducts";
import AdminAddProduct from "./AdminAddProduct";
import AdminChangePassword from "./AdminChangePassword";

export default function Panel() {
  return (
    <div className="flex flex-col  h-screen p-4">
      <div className="w-full">
        <Tabs variant="outline" defaultValue="addProduct">
          <Tabs.List grow>
            <Tabs.Tab value="addProduct">Ürün Ekle</Tabs.Tab>
            <Tabs.Tab value="editProduct">Ürünleri Düzenle</Tabs.Tab>
            <Tabs.Tab value="changePassword">Yönetici Şifre Değiştir</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="addProduct">
            <AdminAddProduct />
          </Tabs.Panel>

          <Tabs.Panel value="editProduct">
            <AdminEditProducts />
          </Tabs.Panel>

          <Tabs.Panel value="changePassword">
            <AdminChangePassword />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
