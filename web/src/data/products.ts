import Logo from "../assets/img/persiana.png"

export type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  brand: string;
  category: string;
  price: string;
};

export const products: Product[] = [
  {
    id: 11,
    name: "Persiana A",
    brand: "Avon",
    description:
      "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: Logo,
    category: "Persianas",
    price: "150,00 MT",
  },
  {
    id: 12,
    name: "Persiana B",
    brand: "Avon",
    description:
    "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: Logo,
    category: "Persianas",
    price: "150,00 MT",
  },
  {
    id: 13,
    name: "Persiana C",
    brand: "Avon",
    description:
    "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: Logo,
    category: "Persianas",
    price: "150,00 MT",
  },
  {
    id: 16,
    name: "Papel de Parede A",
    brand: "Tupperware",
    description:
    "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: Logo,
    category: "Papéis de parede",
    price: "150,00 MT",
  },
  {
    id: 15,
    name: "Papel de Parede B",
    brand: "Tupperware",
    description:
      "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: Logo,
    category: "Papéis de parede",
    price: "150,00 MT",
  },
  {
    id: 17,
    name: "Papel de Parede C",
    brand: "Tupperware",
    description:
      "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: Logo,
    category: "Papéis de parede",
    price: "150,00 MT",
  },
  {
    id: 14,
    name: "Papel de Parede D",
    brand: "Tupperware",
    description:
    "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: Logo,
    category: "Papéis de parede",
    price: "150,00 MT",
  },
];

export const cart = [];
