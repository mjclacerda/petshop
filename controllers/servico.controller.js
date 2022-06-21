import ServicoService from "../services/servico.service.js";

async function insertServico(req, res, next) {
  try {
    let servico = req.body;
    if (!servico.descricao || !servico.valor || !servico.animal_id) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    servico = await ServicoService.insertServico(servico);
    res.send(servico); //aqui ele tá chamando a função de criação do cliente que está lá no client.service.js
    logger.info(`POST /servico - ${JSON.stringify(servico)}`); //no log está sendo gravado o body com os dados do cliente
  } catch (err) {
    next(err);
  }
}

async function getServicos(req, res, next) {
  try {
    res.send(await ServicoService.getServicos(req.query.animal_id, req.query.proprietario_id));
    logger.info("GET /servicos");
  } catch (err) {
    next(err);
  }
}

async function getServico(req, res, next) {
  try {
    res.send(await ServicoService.getServico(req.params.id));
    logger.info("GET /servico");
  } catch (err) {
    next(err);
  }
}

async function deleteServico(req, res, next) {
  try {
    await ServicoService.deleteServico(req.params.id);
    res.send("Registro Apagado");
    logger.info("DELETE /servico");
  } catch (err) {
    next(err);
  }
}

async function updateServico(req, res, next) {
  try {
    let servico = req.body;
    if (
      !servico.servico_id ||
      !servico.descricao ||
      !servico.valor ||
      !servico.animal_id
    ) {
      throw new Error("Há campos obrigatórios não preenchidos");
    }
    servico = await ServicoService.updateServico(servico);
    res.send(servico);
    logger.info(`PUT /servico - ${JSON.stringify(servico)}`);
  } catch (err) {
    next(err);
  }
}

async function getServicoAnimal(req, res, next) {
  try {
    res.send(await ServicoService.getServicoAnimal(req.params.id));
    logger.info("GET /servicoanimal");
  } catch (err) {
    next(err);
  }
}

export default {
  insertServico,
  getServicos,
  getServico,
  deleteServico,
  updateServico,
  getServicoAnimal,
};
