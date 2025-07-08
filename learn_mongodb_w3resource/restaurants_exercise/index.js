import { config } from "dotenv";
import { excuteDbCrudOperations } from "./src/StudentCrud.js";
import { executeRestaurantDBCrudOperations } from "./src/restaurantsCrud.js";

config()
// await excuteDbCrudOperations()



await executeRestaurantDBCrudOperations();


