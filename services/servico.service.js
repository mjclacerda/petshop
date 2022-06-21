import ServicoRepository from "../repositories/servico.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";


async function insertServico(servico) {
  if(await AnimalRepository.getAnimal(servico.animal_id)){
    return await ServicoRepository.insertServico(servico);
  } 
  throw new Error("O animal informado não está cadastrado") 
}

async function getServicos(animalId, proprietarioId) {
  if(animalId){
    return await ServicoRepository.getServicoAnimal(animalId);
  }
  if(proprietarioId){
    const prop = await ServicoRepository.getServicoProprietario(proprietarioId);
    if (prop.length > 0){
      return prop;
    }
    throw new Error ("O proprietário informado não possue serviço registrados para seus animais.")
   
  }
  return await ServicoRepository.getServicos();
}

async function getServico(id) {
  return await ServicoRepository.getServico(id);
}

async function deleteServico(id) {
  await ServicoRepository.deleteServico(id);
}

async function updateServico(servico) {
  if(await AnimalRepository.getAnimal(servico.animal_id)){
    return await ServicoRepository.updateServico(servico);
  }
  throw new Error ("O animal informado não está cadastrado.")
}

export default {
  insertServico,
  getServicos,
  getServico,
  deleteServico,
  updateServico,
};