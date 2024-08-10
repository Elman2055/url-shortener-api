import express from "express";
import bodyParser from "body-parser";
import urlRoutes from "./routes/urlRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", urlRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the URL Shortener API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
