module.exports = {
  db: {
    connectionString: process.env.DB_CONNECTION_STRING,
  },

  env: {
    PORT: process.env.NODE_SERVER_PORT || 3000,
    instancesCount: parseInt(process.env.NODE_INSTANCES_COUNT, 10) || 1,
  },

  app: {
    isLoggerEnabled: parseInt(process.env.APP_LOGGER_ENABLED, 10) || 0,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
