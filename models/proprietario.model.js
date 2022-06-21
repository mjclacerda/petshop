import Sequelize from "sequelize"
import db from "../repositories/db.functions.js";

const Prop = db.define("proprietarios", {
    proprietarioId:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    phone:{
        type: Sequelize.STRING,
        allowNull:false
    },

}, {underscored:true});

export default Prop;
