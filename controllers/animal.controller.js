import AnimalService from "../services/animal.service.js";

async function insertAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    animal = await AnimalService.insertAnimal(animal);
    res.send(animal); //aqui ele tá chamando a função de criação do cliente que está lá no client.service.js
    logger.info(`POST /animal - ${JSON.stringify(animal)}`); //no log está sendo gravado o body com os dados do cliente
  } catch (err) {
    next(err);
  }
}

async function getAnimais(req, res, next) {
  try {
    res.send(await AnimalService.getAnimais(req.query.proprietario_id));
    logger.info("GET /animais");
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info("GET /animal");
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.send("Registro Apagado");
    logger.info("DELETE /animal");
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (
      !animal.animal_id ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietario_id
    ) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  insertAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
