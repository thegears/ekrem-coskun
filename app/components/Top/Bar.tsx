import { Avatar } from "@mantine/core";

export default function Bar() {
  return (
    <div className="flex items-center gap-4 text-2xl shadow-2xl font-semibold">
      <Avatar src="favicon.ico" size="xl" radius={"xl"}></Avatar>
      Ekrem Coşkun
    </div>
  );
}
