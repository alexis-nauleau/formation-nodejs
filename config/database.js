import { Sequelize } from "sequelize";

const sequelize = new Sequelize("exonodejs", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
