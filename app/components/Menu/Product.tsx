import { Card, Image, Text, Badge, Group, Divider } from "@mantine/core";

export default function Product(props: {
  name?: string;
  price?: string;
  image?: string;
}) {
  return (
    <Card shadow="xl" padding="md" radius="xl" withBorder>
      <Card.Section>
        <Image src={props.image} height={160} alt="Norway" />
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
