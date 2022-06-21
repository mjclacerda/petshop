import Sequelize from "sequelize"
import db from "../repositories/db.functions.js";
import proprietario from "./proprietario.model.js";

const Animal = db.define("animais", {
    animalId:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull:false
    },

}, {underscored:true});

Animal.belongsTo( proprietario, {foreignKey:"proprietario_id"}) //pego a foreignkey dessa forma para criar a relação entre as tabelas

export default Animal;