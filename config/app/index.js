module.exports = {
  db: {
    connectionString: process.env.DB_CONNECTION_STRING,
  },

  env: {
    PORT: process.env.NODE_SERVER_PORT,
    instancesCount: parseInt(process.env.NODE_INSTANCES_COUNT, 10) || 1,
  },

  app: {
    isLoggerEnabled: parseInt(process.env.APP_LOGGER_ENABLED, 10) || 0,
  },
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  },
  api: {
    aws: {
      region: process.env.AWS_REGION,
      accessKey: process.env.AWS_ACCESS_KEY_ID,
      secretKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  },
};
