"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./controllers/user_controller"));
const cors_1 = __importDefault(require("cors"));
const verify_1 = require("./middlewares/verify");
const agent_controller_1 = __importDefault(require("./controllers/agent_controller"));
const master_controller_1 = __importDefault(require("./controllers/master_controller"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/agent", verify_1.validation, agent_controller_1.default);
app.use("/users", user_controller_1.default);
app.use("/master_data", verify_1.validation, master_controller_1.default);
app.use((error, req, res, next) => {
    console.log(error.message);
    if (error instanceof Error) {
        res.status(400).json({ message: error.message });
    }
    res.status(500).json("Error");
});
exports.default = app;
//# sourceMappingURL=app.js.map