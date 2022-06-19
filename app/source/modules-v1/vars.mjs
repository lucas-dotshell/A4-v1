import { config } from "dotenv";

const vars = config();
const env = (!process.env) ? vars.parsed : process.env;

export default {
    DB: env.DB_CREDENTIALS,
    S2P: env.S2P,
    VERSION: env.VERSION,
    ENVROIMENT: env.ENVROIMENT,
}