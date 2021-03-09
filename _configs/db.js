const { InitialDatabase } = require("spocx-model");

const env = process.env;
const replica_set = `${env.DB_HOST}:${env.DB_PORT_I},${env.DB_HOST}:${env.DB_PORT_II},${env.DB_HOST}:${env.DB_PORT_III}`;
const db = `${env.DB_DRIVER}://${replica_set}/${env.DB_NAME}`;

InitialDatabase({ uri: db });
