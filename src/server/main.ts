import express from "express";
import ViteExpress from "vite-express";
import axios from "axios";
import { seedData } from "./seed";

const app = express();
app.use(express.json()); // Add this line to parse JSON data
const PORT = 3000;

const apiUrl = "https://crudcrud.com/api/0e0e20d7533b4fdd9222229be5975adb";

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

// mock
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
