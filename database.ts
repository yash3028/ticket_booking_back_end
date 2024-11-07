import { DataSource } from "typeorm";
import { Users } from "./entities/user";

export const data_source = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "yashu",
  password: "admin",
  database: "root_database",
  synchronize: true,
  logging: true,
  entities: [Users],
});

export const connect_to_database = async()=>{
    try{
      console.log(__dirname+"/entities")
       await data_source.initialize()
       console.log("successfully connected")
    }catch(error){
        console.error(error)
    }
}