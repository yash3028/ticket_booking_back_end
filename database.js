"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect_to_database = exports.data_source = void 0;
const typeorm_1 = require("typeorm");
exports.data_source = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "yashu",
    password: "admin",
    database: "root_database",
    synchronize: true,
    logging: true,
    entities: [__dirname + "/entities/*.ts"],
    // subscribers: [],
    migrations: [__dirname + "/migrations/*{.js,.ts}"],
});
const connect_to_database = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(__dirname + "/entities");
        yield exports.data_source.initialize();
        console.log("successfully connected");
    }
    catch (error) {
        console.error(error);
    }
});
exports.connect_to_database = connect_to_database;
//# sourceMappingURL=database.js.map