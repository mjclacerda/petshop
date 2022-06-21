import ProprietarioService from "../services/proprietario.service.js";
import AnimalService from "../services/animal.service.js";

async function insertProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (!proprietario.nome || !proprietario.phone) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    res.send(await ProprietarioService.insertProprietario(proprietario)); //aqui ele tá chamando a função de criação do cliente que está lá no client.service.js
    logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`); //no log está sendo gravado o body com os dados do cliente
  } catch (err) {
    next(err);
  }
}

async function getProprietarios(req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietarios());
    logger.info("GET /proprietario");
  } catch (err) {
    next(err);
  }
}

async function getProprietario(req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietario(req.params.id));
    logger.info("GET /proprietario");
  } catch (err) {
    next(err);
  }
}

async function deleteProprietario(req, res, next) {
  try {
    await ProprietarioService.deleteProprietario(req.params.id);
    res.send("Registro Apagado");
    logger.info("DELETE /proprietario");
  } catch (err) {
    next(err);
  }
  }

async function updateProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (
      !proprietario.proprietario_id ||
      !proprietario.nome ||
      !proprietario.phone
    ) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    proprietario = await ProprietarioService.updateProprietario(proprietario);
    res.send(proprietario);
    logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  insertProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
