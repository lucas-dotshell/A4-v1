import Express from "express";
import vars from "../../modules-v1/vars.mjs";
import logs from "../../modules-v1/logs.mjs";
import authentication from "../controllers/authentication.mjs"

const app = Express();
const port = vars.port || 3333;
const version = `/v${vars.version}`;

app.use(version, authentication);

app.listen(port, () => logs.info(`app listen on port ${port}`));