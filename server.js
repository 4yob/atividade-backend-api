require("dotenv").config();
const express = require("express");
const cors = require("cors");

const editoraRoutes = require("./src/routes/editoraRoutes");
const heroiRoutes = require("./src/routes/heroiRoutes");

const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", editoraRoutes);
app.use("/api", heroiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});