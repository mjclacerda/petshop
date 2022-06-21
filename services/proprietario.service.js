import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AnimalRepository from "../repositories/animal.repository.js"

async function insertProprietario(proprietario) {
  return await ProprietarioRepository.insertProprietario(proprietario);
}

async function getProprietarios() {
  return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(id) {
  const prop = await ProprietarioRepository.getProprietario(id);
  if (prop){
    return prop;
  }
}

async function deleteProprietario(id) {
  const animal = await AnimalRepository.getAnimalProp(id)
  if(animal.length > 0){throw new Error ("Este proprietário não pode ser deletado pois possui animais")
  }await ProprietarioRepository.deleteProprietario(id);
}

async function updateProprietario(proprietario) {
  
  return await ProprietarioRepository.updateProprietario(proprietario);
}

export default {
  insertProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
