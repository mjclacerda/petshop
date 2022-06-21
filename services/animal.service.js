import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js"

async function insertAnimal(animal) {
  if(await ProprietarioRepository.getProprietario(animal.proprietario_id)){
    return await AnimalRepository.insertAnimal(animal);//estou implementando uma regra de negócio para inserir um novo animal apenas se houver o proprietario previamente cadastrado
  }
  throw new Error("O Proprietário informado não está cadastrado")
}

async function getAnimais(proprietaroId) {
  if(proprietaroId){
    return await AnimalRepository.getAnimalProp(proprietaroId)
  }else {
    return await AnimalRepository.getAnimais();
  }
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
  await AnimalRepository.deleteAnimal(id);
}

async function updateAnimal(animal) {
  if(await AnimalRepository.getAnimal(animal.animal_id)){
    throw new Error("O animal_id não pode ser atualizado")
  }
  if(await ProprietarioRepository.getProprietario(animal.proprietario_id)){
    return await AnimalRepository.updateAnimal(animal);
  }
  throw new Error("O Proprietário informado não está cadastrado")
}

export default {
  insertAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
