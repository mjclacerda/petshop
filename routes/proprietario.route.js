import express from "express";
import ProprietarioController from "../controllers/proprietario.controller.js"; //importando dados do client.controller para poder criar a rota.

const router = express.Router();

router.post("/", ProprietarioController.insertProprietario);
router.get("/", ProprietarioController.getProprietarios);
router.get("/:id", ProprietarioController.getProprietario);
router.delete("/:id", ProprietarioController.deleteProprietario);
router.put("/", ProprietarioController.updateProprietario);

export default router;
