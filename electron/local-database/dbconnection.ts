import "reflect-metadata"
import { DataSource } from "typeorm";
import { Item } from "./entities/Item";
import path from "path";
import { User } from "./entities/User";

export const dbContext = new DataSource({
    type: 'sqlite',
    synchronize: true,
    logging: false,
    logger: 'simple-console',
    database: 'electron/local-database/db/database.sqlite',
    entities: [ Item, User ]
  })
  .initialize()
  .then(dbContext => { console.log('database initialized'); return dbContext })

