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
exports.agent = agent;
exports.save_bus = save_bus;
const database_1 = require("../database");
const bus_details_1 = require("../entities/bus_details");
const user_1 = require("../entities/user");
function agent(cred) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user_repository = database_1.data_source.getRepository(user_1.Users);
            const res = yield user_repository.findOne({
                where: {
                    mobile: cred.mobile,
                },
            });
            if ((res === null || res === void 0 ? void 0 : res.password) == cred.password && res.user_role === "agent") {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            throw error;
        }
    });
}
function save_bus(details) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user_repository = database_1.data_source.getRepository(bus_details_1.Bus_Details);
            const save_user = user_repository.save(details);
            return save_user;
        }
        catch (error) {
            console.error("bus:", error);
            throw new Error("new");
        }
    });
}
//# sourceMappingURL=agent_services.js.map