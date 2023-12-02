export const seedData = [
  {
    _id: "6550c0d5f3272103e862bbb4",
    brand: "Nike",
    name: "Air Jordan 2",
    price: "125",
    size: "12",
    year: "2019",
    rate: 5,
  },
  {
    _id: "6550c0e4f3272103e862bbb5",
    brand: "Nike",
    name: "Air Jordan",
    price: "150",
    size: "10",
    year: "2017",
    rate: 3,
  },
  {
    _id: "6550c13ff3272103e862bbb6",
    brand: "Adidas",
    name: "Nemesis",
    price: "250",
    size: "8",
    year: "2011",
    rate: 2,
  },
  {
    _id: "6550c0d5f3272103e862abb4",
    brand: "Nike",
    name: "Air Jordan 3",
    price: "200",
    size: "11",
    year: "2010",
    rate: 4,
  },
  {
    _id: "6550c0e4f3272103e862cbb5",
    brand: "Nike",
    name: "Air Max",
    price: "100",
    size: "10",
    year: "2006",
    rate: 4,
  },
  {
    _id: "6550c13ff3272103e862ebb6",
    brand: "Adidas",
    name: "Grand Court",
    price: "300",
    size: "9",
    year: "2023",
    rate: 3,
  },
  {
    _id: "6550c0d5f3272103e822bbb4",
    brand: "Puma",
    name: "Versatile",
    price: "125",
    size: "12",
    year: "2019",
    rate: 4,
  },
  {
    _id: "6560c0e4f3272103e862bbb5",
    brand: "New Balance",
    name: "657",
    price: "150",
    size: "10",
    year: "2017",
    rate: 5,
  },
  {
    _id: "65512c13ff3272103e862bbb6",
    brand: "Lacoste",
    name: "Basic",
    price: "250",
    size: "8",
    year: "2011",
    rate: 3,
  },
  {
    _id: "6550c123f3272103e862abb4",
    brand: "Salomon",
    name: "Tour",
    price: "200",
    size: "11",
    year: "2010",
    rate: 4,
  },
  {
    _id: "6550c0e4f3211103e862cbb5",
    brand: "Reebok",
    name: "Classic",
    price: "100",
    size: "10",
    year: "2006",
    rate: 4,
  },
  {
    _id: "6550c13ff3272221e862ebb6",
    brand: "New Balance",
    name: "AZ324",
    price: "300",
    size: "9",
    year: "2023",
    rate: 1,
  },
];

const generateRandomShoe = () => {
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "New Balance",
    "Lacoste",
    "Salomon",
    "Reebok",
  ];
  const sizes = ["8", "9", "10", "11", "12"];
  const years = ["2010", "2011", "2017", "2019", "2023"];
  const rates = [1, 2, 3, 4, 5];

  return {
    _id: Math.random().toString(36).slice(2, 12), // Use slice instead of substr
    brand: brands[Math.floor(Math.random() * brands.length)],
    name:
      brands[Math.floor(Math.random() * brands.length)] +
      ` ${rates[Math.floor(Math.random() * rates.length)]}`,
    price: (Math.floor(Math.random() * 200) + 100).toString(), // Random price between 100 and 300
    size: sizes[Math.floor(Math.random() * sizes.length)],
    year: years[Math.floor(Math.random() * years.length)],
    rate: rates[Math.floor(Math.random() * rates.length)],
  };
};

export const extendedSeedData = [...seedData];

// Generate and add random shoes
for (let i = 0; i < 999; i++) {
  const randomShoe = generateRandomShoe();
  extendedSeedData.push(randomShoe);
}
