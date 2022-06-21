import Sequelize from "sequelize"
import db from "../repositories/db.functions.js";
import animal from "./animal.model.js";

const servico = db.define("servicos", {
    servicoId:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull:false
    },
    valor:{
        type: Sequelize.DOUBLE,
        allowNull:false
    },

}, {underscored:true});

servico.belongsTo( animal, {foreignKey:"animal_id"}) //pego a foreignkey dessa forma para criar a relação entre as tabelas

export default servico;