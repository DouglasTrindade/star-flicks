import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "star_api_development",
  username: "starflicks",
  password: "starflicks",
  define: {
    underscored: true,
  },
});
