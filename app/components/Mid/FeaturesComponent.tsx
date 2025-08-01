import { Card, Group, Text, Badge, Image, Avatar } from "@mantine/core";

export default function FeaturesComponent() {
  return (
    <div
      id="ozellikler"
      className="flex justify-center my-8 gap-4 flex-col md:flex-row p-4"
    >
      <Card className="w-full md:w-1/3" shadow="xl" padding="lg" radius="md">
        <Card.Section className="p-4">
          <Avatar src="hijyen.png"></Avatar>
        </Card.Section>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Hijyen</Text>
          <Badge color="green"></Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Dükkanımızda hijyen konusuna verdiğimiz önem, müşterilerimize sağlıklı
          ve güvenilir bir alışveriş ortamı sunmamızı sağlıyor. Temizlik ve
          düzenin sürekli sağlanmasıyla, hem çalışanlarımızın hem de
          müşterilerimizin güvenliği ve memnuniyeti en ön planda tutuluyor.
          Hijyen standartlarına gösterdiğimiz özen, dükkanımızın kalitesini ve
          itibarını artırırken, sağlıklı bir ortamda alışveriş yapmanın keyfini
          yaşatıyor. Bu titizlikle çalışmaya devam ederek, müşteri memnuniyetini
          ve sağlığı ön planda tutmayı sürdüreceğiz.
        </Text>
      </Card>

      <Card shadow="xl" className="w-full md:w-1/3" padding="lg" radius="md">
        <Card.Section className="p-4">
          <Avatar src="lezzet.png"></Avatar>
        </Card.Section>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Lezzet</Text>
          <Badge color="green"></Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Dükkanımızda sunulan ürünlerin lezzeti, müşterilerimizin memnuniyetini
          ve sadakatini kazanan en büyük özelliklerden biridir. Her bir ürün,
          özenle seçilmiş malzemelerle hazırlanarak, damağınıza hitap eden eşsiz
          tatlar sunar. Tazelik ve kaliteye verdiğimiz önem, lezzetlerimizin
          özgün ve unutulmaz olmasını sağlar. Müşterilerimizin yüzünde oluşan
          memnuniyet ifadesi, bizim için en büyük ödüldür ve sürekli daha
          iyisini sunma tutkumuzu pekiştirir. Lezzetimizle fark yaratmaya devam
          ederek, her ziyaretinizde size en güzel tatları deneyimletmekten gurur
          duyuyoruz.
        </Text>
      </Card>

      <Card shadow="xl" className="w-full md:w-1/3" padding="lg" radius="md">
        <Card.Section className="p-4">
          <Avatar src="ucuz.png"></Avatar>
        </Card.Section>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Uygun Fiyat</Text>
          <Badge color="green"></Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Dükkanımızda kaliteli ürünleri uygun fiyatlarla sunmak en büyük
          önceliklerimizden biridir. Müşterilerimize ekonomik ve erişilebilir
          seçenekler sağlayarak, bütçelerini zorlamadan ihtiyaçlarını
          karşılamalarına imkan tanıyoruz. Her bütçeye uygun çeşitli
          ürünlerimizle, hem ekonomik hem de yüksek kaliteyi bir arada sunmayı
          amaçlıyoruz. Uygun fiyat politikamız sayesinde, müşterilerimizin
          memnuniyetini kazanırken, alışverişlerini keyifli ve faydalı hale
          getiriyoruz. Bu sayede, her ziyaretinizde hem cebinizi düşünerek hem
          de beklentilerinizi karşılayacak hizmetler sunmaya devam ediyoruz.
        </Text>
      </Card>
    </div>
  );
}
