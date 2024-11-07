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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const user_service_1 = require("../services/user_service");
const router = express_1.default.Router();
router.post("/save-user", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(201).send(yield (0, user_service_1.save_user)(req.body));
    }
    catch (error) {
        next(error);
    }
}));
router.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const login_response = yield (0, user_service_1.login)(req.body);
        if (login_response) {
            res.status(200).send({ message: "successful" });
        }
        else {
            res.status(401).send({ message: "unauthorized" });
        }
    }
    catch (error) {
        next(error);
    }
}));
module.exports = router;
//# sourceMappingURL=user_controller.js.map