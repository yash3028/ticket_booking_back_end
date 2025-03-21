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
router.post("/profile", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ message: 'success' });
    }
    catch (error) {
        next(error);
    }
}));
router.post("/save-bus", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(201).send(yield (0, user_service_1.save_bus)(req.body));
    }
    catch (error) {
        next(error);
    }
}));
router.post("/agent", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agent_login = yield (0, user_service_1.agent)(req.body);
        if (agent_login) {
            res.status(200).json({ message: "valid" });
        }
        else {
            res.status(401).json({ message: "not valid" });
        }
    }
    catch (error) {
        next(error);
    }
}));
module.exports = router;
//# sourceMappingURL=agent_controller.js.map