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
exports.get_locations = get_locations;
const database_1 = require("../database");
const cities_1 = require("../entities/cities");
function get_locations() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cities_repository = database_1.data_source.getRepository(cities_1.master_data);
            const cities = yield cities_repository.find({
                select: ["city", "city_code"],
            });
            return cities;
        }
        catch (error) {
            throw error;
        }
    });
}
//# sourceMappingURL=location_services.js.map