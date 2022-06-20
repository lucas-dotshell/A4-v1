import { MongoClient } from "mongodb";
import vars from "./vars.mjs";
import { error } from "./logs.mjs";

export const db_conn = () => new Promisse(async (resolve, reject) => {
    await MongoClient.connect(vars.db).then((e) => resolve(e)).catch((e) => { error(e); reject(e); });
});