import express from "express";
import ViteExpress from "vite-express";
import axios from "axios";
// import { seedData } from "./seed";

const app = express();
ViteExpress.config({
  mode:
    process.env.VITE_VERCEL_ENV === "production" ? "production" : "development",
});
console.log(process.env.VITE_VERCEL_ENV);
app.use(express.json()); // Add this line to parse JSON data
const PORT = 3000;
const apiUrl = "https://crudcrud.com/api/0e0e20d7533b4fdd9222229be5975adb";

// POST method to create a new sneaker
app.post("/sneakers", async (req, res) => {
  try {
    const response = await axios.post(`${apiUrl}/sneakers`, req.body);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// GET method to retrieve all sneakers
app.get("/sneakers", async (_, res) => {
  try {
    const response = await axios.get(`${apiUrl}/sneakers`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// mock seed data
// app.get("/sneakers", async (_, res) => {
//   try {
//     res.json(seedData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// PUT method to update sneaker details
app.put("/sneakers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await axios.put(`${apiUrl}/sneakers/${id}`, req.body);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// DELETE method to remove a sneaker
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
