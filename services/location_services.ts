import { data_source } from "../database";
import { master_data } from "../entities/cities";

export async function get_locations() {
  try {
    const cities_repository = data_source.getRepository(master_data);
    const cities = await cities_repository.find({
      select: ["city", "city_code"],
    });
    return cities;
  } catch (error) {
    throw error;
  }
}
