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
exports.save_user = save_user;
exports.login = login;
const database_1 = require("../database");
const user_1 = require("../entities/user");
function save_user(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user_repository = database_1.data_source.getRepository(user_1.Users);
            const saved_user = user_repository.save(user);
            return saved_user;
        }
        catch (error) {
            throw error;
        }
    });
}
function login(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user_repository = database_1.data_source.getRepository(user_1.Users);
            const response = yield user_repository.findOne({
                where: {
                    mobile: credentials.mobile
                }
            });
            if ((response === null || response === void 0 ? void 0 : response.password) == credentials.password) {
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
;
//# sourceMappingURL=user_service.js.map