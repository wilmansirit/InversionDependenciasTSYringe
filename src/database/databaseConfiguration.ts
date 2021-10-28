import * as dotenv from 'dotenv'
import { ConnectionOptions } from 'typeorm';

dotenv.config()

export const DatabaseConfiguration: ConnectionOptions = {
  type: "mongodb",
  host: process.env.TYPEORM_HOST,
  port: 27017,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  logging: false,
  useUnifiedTopology: true,
  entities: [
    "src/entity/**/*.ts"
  ],
  migrations: [
    "src/migration/**/*.ts"
  ],
  subscribers: [
    "src/subscriber/**/*.ts"
  ],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};