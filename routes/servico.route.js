import express from "express";
import ServicoController from "../controllers/servico.controller.js";
const router = express.Router();

router.post("/", ServicoController.insertServico);
router.get("/", ServicoController.getServicos);
router.get("/:id", ServicoController.getServico);
router.delete("/:id", ServicoController.deleteServico);
router.put("/", ServicoController.updateServico);
router.get("/animal/:id", ServicoController.getServicoAnimal);

export default router;