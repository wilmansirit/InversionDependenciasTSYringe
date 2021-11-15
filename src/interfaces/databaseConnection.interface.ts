import { Connection, ConnectionOptions } from "typeorm";

export interface DatabaseConnectionInterface {
  connection: Connection;

  getConnection(): Promise<Connection>;

  closeConnection(): void;
}
