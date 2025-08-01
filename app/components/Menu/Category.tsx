import { Card, Text, Image, Group } from "@mantine/core";
import { useNavigate } from "react-router";

export default function Category(props: {
  name: string;
  image: string;
  categoryHref: string;
}) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(props.categoryHref)}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image src={props.image} height={160} alt={props.name} />
      </Card.Section>

      <Group justify="center" mt="xl" mb="xs">
        <Text fw={500}>{props.name}</Text>
      </Group>
    </Card>
  );
}
