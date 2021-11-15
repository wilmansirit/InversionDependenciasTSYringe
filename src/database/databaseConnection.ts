import { inject, singleton } from "tsyringe";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { DatabaseConnectionInterface } from "../interfaces";

@singleton()
export default class DatabaseConnection implements DatabaseConnectionInterface {
  // Declaration
  connection: Connection;


  constructor(
    @inject("DatabaseConfiguration")
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
