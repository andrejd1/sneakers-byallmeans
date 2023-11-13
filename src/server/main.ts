import express from "express";
import ViteExpress from "vite-express";
import axios from "axios";

const app = express();
app.use(express.json()); // Add this line to parse JSON data
const PORT = 3000;

const apiUrl = "https://crudcrud.com/api/0e0e20d7533b4fdd9222229be5975adb";
const seedData = [
  {
    _id: "6550c0d5f3272103e862bbb4",
    brand: "Nike",
    name: "Air Jordan 2",
    price: "125",
    size: "12",
    year: "2019",
  },
  {
    _id: "6550c0e4f3272103e862bbb5",
    brand: "Nike",
    name: "Air Jordan",
    price: "150",
    size: "10",
    year: "2017",
  },
  {
    _id: "6550c13ff3272103e862bbb6",
    brand: "Adidas",
    name: "Nemesis",
    price: "250",
    size: "8",
    year: "2011",
  },
  {
    _id: "6550c0d5f3272103e862abb4",
    brand: "Nike",
    name: "Air Jordan 3",
    price: "200",
    size: "11",
    year: "2010",
  },
  {
    _id: "6550c0e4f3272103e862cbb5",
    brand: "Nike",
    name: "Air Max",
    price: "100",
    size: "10",
    year: "2006",
  },
  {
    _id: "6550c13ff3272103e862ebb6",
    brand: "Adidas",
    name: "Grand Court",
    price: "300",
    size: "9",
    year: "2023",
  },
  {
    _id: "6550c0d5f3272103e822bbb4",
    brand: "Puma",
    name: "Versatile",
    price: "125",
    size: "12",
    year: "2019",
  },
  {
    _id: "6560c0e4f3272103e862bbb5",
    brand: "New Balance",
    name: "657",
    price: "150",
    size: "10",
    year: "2017",
  },
  {
    _id: "65512c13ff3272103e862bbb6",
    brand: "Lacoste",
    name: "Basic",
    price: "250",
    size: "8",
    year: "2011",
  },
  {
    _id: "6550c123f3272103e862abb4",
    brand: "Salomon",
    name: "Tour",
    price: "200",
    size: "11",
    year: "2010",
  },
  {
    _id: "6550c0e4f3211103e862cbb5",
    brand: "Reebok",
    name: "Classic",
    price: "100",
    size: "10",
    year: "2006",
  },
  {
    _id: "6550c13ff3272221e862ebb6",
    brand: "New Balance",
    name: "AZ324",
    price: "300",
    size: "9",
    year: "2023",
  },
];

app.post("/sneakers", async (req, res) => {
  console.log(req.body);
  try {
    const response = await axios.post(`${apiUrl}/sneakers`, req.body);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// app.get("/sneakers", async (_, res) => {
//   try {
//     const response = await axios.get(`${apiUrl}/sneakers`);
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.get("/sneakers", async (_, res) => {
  try {
    res.json(seedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/sneakers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await axios.delete(`${apiUrl}/sneakers/${id}`);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 3000..."),
);
