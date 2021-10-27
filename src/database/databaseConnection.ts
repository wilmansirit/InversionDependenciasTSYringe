import { Connection, ConnectionOptions, createConnection } from "typeorm";

export class DatabaseConnection {

    // Declaration
    private static connect: DatabaseConnection;
    private connection: Connection;
    private configuration: ConnectionOptions;

    private constructor() { };

    public static setConnection(): DatabaseConnection {

        if (DatabaseConnection.connect == null) {
            DatabaseConnection.connect = new DatabaseConnection()
        }

        return DatabaseConnection.connect;
    }

    public async getConnection(databaseConfiguration: ConnectionOptions): Promise<Connection> {

        this.configuration = databaseConfiguration as any
        
        this.connection = await createConnection(this.configuration);

        return this.connection;

    }

    public closeConnection() {
        this.connection.close();
    }
}