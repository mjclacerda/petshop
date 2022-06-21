import Prop from "../models/proprietario.model.js";

async function insertProprietario(proprietario) {
  try {
    return await Prop.create(proprietario);
  } catch (err) {
    throw err;
  }
}
 

async function getProprietarios() {
  try {
    return await Prop.findAll();
  } catch (err) {
    throw err;
  }
}
 

async function getProprietario(id) {
  try {
  return await Prop.findByPk(id);
  } catch (err) {
    throw err;
  }
}


async function updateProprietario(proprietario) {
  try {
    await Prop.update(proprietario, {
      where:{
        proprietarioId: proprietario.proprietario_id
      }
    });
    return await getProprietario(proprietario.proprietario_id)
  } catch (err) {
    throw err;
  }
}
 

async function deleteProprietario(id) {
  try {
    await Prop.destroy({
      where:{
        proprietarioId: id
      }
    })
  } catch (err) {
    throw err;
  }
}
 

export default {
  insertProprietario,
  getProprietarios,
  getProprietario,
  updateProprietario,
  deleteProprietario,
};