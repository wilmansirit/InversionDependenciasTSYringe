import { inject, singleton } from "tsyringe";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { DatabaseConnectionInterfase } from "../interfaces";

@singleton()
export class DatabaseConnection implements DatabaseConnectionInterfase {
  // Declaration
  connection: Connection;


  constructor(
    @inject("databaseConfiguration")
    private databaseConfiguraction: ConnectionOptions
  ) {}

  public async getConnection(): Promise<Connection> {

    this.connection = await createConnection(this.databaseConfiguraction);
    return this.connection;
  }

  public closeConnection() {
    this.connection.close();
  }
}
