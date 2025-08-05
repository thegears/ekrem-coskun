import { Avatar, Burger, Button, Menu, Text } from "@mantine/core";
import { useNavigate } from "react-router";
import { scroller } from "react-scroll";

export default function Bar() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        className="flex p-1 h-16 justify-between flex-row grow fixed top-3 mx-auto left-0  right-0 justify-center items-center text-2xl shadow-2xl font-semibold w-11/12 rounded-4xl z-50"
      >
        <div
          onClick={() => scroller.scrollTo("home", { smooth: true })}
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
            onClick={() => scroller.scrollTo("sorular", { smooth: true })}
            variant="subtle"
          >
            Sorular
          </Button>
          <Button
            color="black"
            onClick={() => scroller.scrollTo("ozellikler", { smooth: true })}
            variant="subtle"
          >
            Özellikler
          </Button>
          <Button
            color="black"
            onClick={() => scroller.scrollTo("urunler", { smooth: true })}
            variant="subtle"
          >
            Ürünler
          </Button>
          <Button
            color="black"
            onClick={() => scroller.scrollTo("iletisim", { smooth: true })}
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
              <Menu.Item
                onClick={() => scroller.scrollTo("sorular", { smooth: true })}
              >
                Sorular
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scroller.scrollTo("ozellikler", { smooth: true })
                }
              >
                Özellikler
              </Menu.Item>
              <Menu.Item
                onClick={() => scroller.scrollTo("urunler", { smooth: true })}
              >
                Ürünler
              </Menu.Item>
              <Menu.Item
                onClick={() => scroller.scrollTo("iletisim", { smooth: true })}
              >
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
