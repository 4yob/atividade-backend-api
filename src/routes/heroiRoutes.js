const express = require("express");
const router = express.Router();
const heroiController = require("../controllers/heroiController");

router.get("/heros", heroiController.getAllHeros);
router.get("/heros/:id", heroiController.getHero);
router.post("/heros", heroiController.createHero);
router.put("/heros/:id", heroiController.updateHero);
router.delete("/heros/:id", heroiController.deleteHero);

module.exports = router;