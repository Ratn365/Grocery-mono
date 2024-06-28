const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB: process.env.DB_NAME,
  DB_USER: process.env.DB_USER_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PASSWORD: process.env.DB_USER_PASSWORD,
  APP_SECRET: process.env.APP_SECRET,
};
