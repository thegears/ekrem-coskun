import { Avatar, Burger, Button, Menu, Text } from "@mantine/core";
import { useNavigate } from "react-router";

export default function Bar() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        className="flex p-1 h-16 justify-between flex-row grow fixed top-3 mx-auto left-0  right-0 justify-center items-center text-2xl shadow-2xl font-semibold w-11/12 rounded-4xl z-50"
      >
        <div
          onClick={() => navigate("/")}
          className="flex  grow items-center w-full cursor-pointer"
        >
          <Avatar src="favicon.ico" size="lg" radius={"xl"} />
          <Text size="lg" style={{ color: "black", fontWeight: "bold" }}>
            Ekrem Coşkun
          </Text>
        </div>
        <div className="invisible w-full md:visible">
          <Button
            color="black"
            onClick={() => navigate("#sorular")}
            variant="subtle"
          >
            Sorular
          </Button>
          <Button
            color="black"
            onClick={() => navigate("#ozellikler")}
            variant="subtle"
          >
            Özellikler
          </Button>
          <Button
            color="black"
            onClick={() => navigate("#urunler")}
            variant="subtle"
          >
            Ürünler
          </Button>
          <Button
            color="black"
            onClick={() => navigate("#iletisim")}
            variant="subtle"
          >
            İletişim
          </Button>
          <Button
            color="black"
            onClick={() => navigate("/menu")}
            variant="subtle"
          >
            Menü
          </Button>
        </div>
        <div className="visible   grow md:invisible ">
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Burger lineSize={2} aria-label="Toggle navigation" />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={() => navigate("#sorular")}>
                Sorular
              </Menu.Item>
              <Menu.Item onClick={() => navigate("#ozellikler")}>
                Özellikler
              </Menu.Item>
              <Menu.Item onClick={() => navigate("#urunler")}>
                Ürünler
              </Menu.Item>
              <Menu.Item onClick={() => navigate("#iletisim")}>
                İletişim
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/menu")}>Menü</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
  );
}
