import { Card, Group, Text, Badge } from "@mantine/core";

export default function QuestionsComponent() {
  return (
    <div
      id="sorular"
      className="flex justify-center flex-col md:flex-row my-8 gap-4  p-4"
    >
      <Card shadow="sm" padding="lg" radius="xl" withBorder>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Biz Kimiz?</Text>
          <Badge color="green">Soru</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Kâr marjımızı düşük tutarak, günlük kg satışımızda ciddi anlamda artış
          gerçekleştirdik. Bu hamlemiz ile dönerdeki fire oranının azalmasıyla,
          ekmek arası et dönerimizi her bütçeye uygun hale getirmiş olduk. ‘’Az
          kazanalım, sürümden kazanalım’’ dedik ve günlük belirli bir âdete
          ulaşınca; ‘’Bu fiyata et döner mi olur’’ algısını da yenmiş olduk.
          Ayrıca, insanların hayatlarına devam edebilmeleri için barınma ve yeme
          içmeye ihtiyacı bulunmaktadır.
        </Text>
      </Card>
      <Card shadow="sm" padding="lg" radius="xl" withBorder>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Amacımız Nedir?</Text>
          <Badge color="green">Soru</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Markamızın misyonu ve vizyonu gereği öncelikli hedefimiz; halkımızın
          sağlıklı, doğal, hilesiz ve kaliteli %100 yaprak et döner yemesini
          sağlamaktır. Sektörümüzde en büyük sıkıntı kalifiyeli personel ve usta
          bulma konusunda yaşanmakta olup maliyetleri işletmenin para kazanma
          konusunu ciddi anlamda etkilemektedir. Geliştirdiğimiz Express konsept
          ile personel sayısı, işletme kurulum ve sabit giderlerini düşük
          tutarak, self servis modeline geçiş yaptık.
        </Text>
      </Card>
    </div>
  );
}
