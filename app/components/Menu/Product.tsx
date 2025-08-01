import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export default function Product(props: {
  name?: string;
  price?: string;
  image?: string;
}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <img src={props.image} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <div className="flex  w-full  justify-center flex-row">
          <Text fw={500} className="text-wrap">
            {props.name}
            <div className="flex flex-row justify-center mt-4">
              <Badge color="green" size="xl">
                {props.price} TL
              </Badge>
            </div>
          </Text>
        </div>
      </Group>
    </Card>
  );
}
