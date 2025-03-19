import { DataSource } from "typeorm";
import { Users } from "./entities/user";
import { Bus_Details } from "./entities/bus_details";
import { master_data } from "./entities/cities";

export const data_source = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "yashu",
  password: "admin",
  database: "root_database",
  synchronize: true,
  logging: true,
  entities: [Users, Bus_Details, master_data],
});

export const connect_to_database = async () => {
  try {
    console.log(__dirname + "/entities");
    await data_source.initialize();
    console.log("successfully connected");
  } catch (error) {
    console.error(error);
  }
};
