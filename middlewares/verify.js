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
exports.validation = void 0;
const database_1 = require("../database");
const user_1 = require("../entities/user");
const jwtUtils_1 = require("../utils/jwtUtils");
const validation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authheader = req.headers.authorization;
        if (!authheader) {
            res.status(401).json({ message: "header is missing" });
        }
        const token = authheader === null || authheader === void 0 ? void 0 : authheader.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "token is missing" });
            return;
        }
        else {
            const validate = yield (0, jwtUtils_1.verification)(token);
            if (!validate) {
                res.status(401).json({ message: "invalid token" });
                return;
            }
            else {
                const user_repository = database_1.data_source.getRepository(user_1.Users);
                const response = yield user_repository.findOne({
                    where: { mobile: validate.mobile, token },
                });
                if (!response) {
                    res.status(401).json({ message: "unauthorized user" });
                    return;
                }
            }
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.validation = validation;
//# sourceMappingURL=verify.js.map