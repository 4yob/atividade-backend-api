const express = require("express");
const router = express.Router();
const editoraController = require("../controllers/editoraController");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);
router.get("/publishers", editoraController.getAllPublishers);
router.get("/publishers/:id", editoraController.getPublisher);
router.post("/publishers", editoraController.createPublisher);
router.put("/publishers/:id", editoraController.updatePublisher);
router.delete("/publishers/:id", editoraController.deletePublisher);

module.exports = router;