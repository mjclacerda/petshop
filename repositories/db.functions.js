import sequelize, { Sequelize } from "sequelize";

const seq = new Sequelize(
  "Aqui coloca a url do postgres",
  {
    dialect:"postgres",
    define:{
      timestamps: false
    }
  }
)
      
export default seq;
