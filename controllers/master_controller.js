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
const express_1 = require("express");
const location_services_1 = require("../services/location_services");
const router = (0, express_1.Router)();
router.get("/locations", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send(yield (0, location_services_1.get_locations)());
    }
    catch (error) {
        next(error);
    }
}));
module.exports = router;
//# sourceMappingURL=master_controller.js.map