export default () => ({
  database: {
    port: process.env.MONGO_PORT,
    host: process.env.MONGO_HOST,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    db: process.env.MONGO_DB,
  },
});
