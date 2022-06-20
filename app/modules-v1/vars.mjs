import { config } from "dotenv";

const vars = config();
const env = process.env || vars.parsed;

export default {
    port: env.PORT,
    db: env.DB_CREDENTIALS,
    s2p: env.S2P,
    version: env.VERSION,
    envroiment: env.ENVROIMENT,
}