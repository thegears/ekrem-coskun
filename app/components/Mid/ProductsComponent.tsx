import { Card, Group, Text, Badge, Image } from "@mantine/core";
import { useNavigate } from "react-router";

export default function ProductsComponent() {
  const navigate = useNavigate();

  return (
    <div
      id="urunler"
      className="flex justify-center flex-col md:flex-row my-8 gap-4 p-4"
    >
      <Card
        shadow="sm"
        className="w-full md:w-1/3"
        padding="lg"
        radius="md"
        withBorder
        onClick={() => navigate("/menu")}
      >
        <Card.Section>
          <Image src="/tavukdoner.jpg" height={160} alt="Norway" />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Tavuk Döner</Text>
          <Badge color="green">Ürün</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          "Ekrem Coşkun Döner hijyenik koşullarda hazırlanan lezzetlerini Alo
          Paket veya Gel-Al hizmetiyle sizlerle buluşturmaya devam etmektedir"
        </Text>
      </Card>
      <Card
        shadow="sm"
        className="w-full md:w-1/3"
        padding="lg"
        radius="md"
        withBorder
        onClick={() => navigate("/menu")}
      >
        <Card.Section>
          <Image src="etdoner.jpg" height={160} alt="Norway" />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Et Döner</Text>
          <Badge color="green">Ürün</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          "Restoran ve Lokantacılık sektöründe ilk defa Hijyen ve Sanitasyon
          Belgesi alan marka olmanın ayrıcalığı ve sorumluluğuyla...
        </Text>
      </Card>
      <Card
        className="w-full md:w-1/3"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        onClick={() => navigate("/menu")}
      >
        <Card.Section>
          <Image src="iskender.jpg" height={160} alt="Norway" />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>İskender</Text>
          <Badge color="green">Ürün</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          "Sağlığınızı ve çocuklarınızın gelişimini olumsuz etkileyecek hiç bir
          ürün ve katkı maddesi kullanmıyoruz. Dönerimizin eşsiz lezzet ve
          kalitesini sunuyoruz...
        </Text>
      </Card>

      <Card
        className="w-full md:w-1/3"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        onClick={() => navigate("/menu")}
      >
        <Card.Section>
          <Image src="tost.jpg" height={160} alt="Norway" />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Tost</Text>
          <Badge color="green">Ürün</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Sağlığınız bizim için her şeyden önemli. Geleneksel lezzeti en doğal
          haliyle sunuyor, tostumuzu en kaliteli malzemelerle özenle
          hazırlıyoruz.
        </Text>
      </Card>
    </div>
  );
}
