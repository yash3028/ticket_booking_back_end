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
Object.defineProperty(exports, "__esModule", { value: true });
exports.payload = payload;
exports.generateJWT = generateJWT;
exports.verification = verification;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/*export function generateKey():string{
    return crypto.randomBytes(64).toString('hex')
}*/
const key = "jbjasdbsjdbsj";
function payload(user_id, email) {
    return { user_id, email };
}
function generateJWT(payload) {
    return jsonwebtoken_1.default.sign(payload, key, { expiresIn: "1h" });
}
function verification(token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let payload = null;
            jsonwebtoken_1.default.verify(token, key, { complete: true }, function (error, decoded) {
                if (error) {
                    throw error;
                }
                else {
                    payload = decoded === null || decoded === void 0 ? void 0 : decoded.payload;
                }
            });
            return payload;
        }
        catch (error) {
            throw error;
        }
    });
}
//# sourceMappingURL=jwtUtils.js.map