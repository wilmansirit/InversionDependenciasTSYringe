import { Connection, ConnectionOptions } from "typeorm";

export interface DatabaseConnectionInterfase {
  connection: Connection;

  getConnection(): Promise<Connection>;

  closeConnection(): void;
}
