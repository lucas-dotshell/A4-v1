import { MongoClient } from "mongodb";
import { DB } from "./vars.mjs";

return new Promisse(async (resolve, reject) => {
    await MongoClient.connect(DB).then((e) => resolve(e)).catch((e) => reject(e));
});