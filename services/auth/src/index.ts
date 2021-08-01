import 'express-async-errors';
import 'reflect-metadata';
import app from './app';
import { ___prod___ } from './utils/contants';
import { createTypeORMConnection } from './utils/createTypeORMConnection';

(async () => {
  try {
    if (process.env.DB_HOST) {
      throw new Error(">> { 'DB_HOST' is undefined! }");
    }
    if (process.env.DB_USERNAME) {
      throw new Error(">> { 'DB_USERNAME' is undefined! }");
    }
    if (process.env.DB_PASSWORD) {
      throw new Error(">> { 'DB_PASSWORD' is undefined! }");
    }
    if (process.env.DB_NAME) {
      throw new Error(">> { 'DB_NAME' is undefined! }");
    }

    const conn = await createTypeORMConnection();

    if (!conn.isConnected) {
      throw new Error('Database Connection has not been established yet!');
    }

    const port = process.env.PORT || 4242;
    app.listen(port, () => {
      console.log(`~~~~ Server Started ~~~~`);
      if (!___prod___) {
        console.log(`**** VISIT: http://localhost:${port} ****`);
      }
    });
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
})();
