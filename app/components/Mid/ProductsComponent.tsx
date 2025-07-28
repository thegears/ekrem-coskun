import { Card, Group, Text, Badge, Image } from "@mantine/core";

export default function ProductsComponent() {
  return (
    <div className="flex justify-center my-8 gap-4 p-4">
      <Card shadow="sm" className="w-1/3" padding="lg" radius="md" withBorder>
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
      <Card shadow="sm" className="w-1/3" padding="lg" radius="md" withBorder>
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
      <Card className="w-1/3" shadow="sm" padding="lg" radius="md" withBorder>
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
    </div>
  );
}
