// Shared database types
export type Product = {
  category: string;
  name: string;
  price: string;
  image?: string;
};

export type DatabaseSchema = {
  adminPassword?: string;
  products?: Product[];
  onoff: boolean;
};
