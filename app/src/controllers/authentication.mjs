import { Router } from "express";
import { createToken } from "../../modules-v1/jsonwebtoken.mjs";
import logs from "../../modules-v1/logs.mjs";
import { confirmApiKey } from "../../modules-v1/verifyapikey.mjs"

const router = Router();

router.get("/authentication", (req, res) => {
    try
    {
        confirmApiKey(/*req.headers.x-api-key*/"qqslç");
        const token = createToken({test: "123", app: "acbx"})
        res.status(200).json({
        });
    }
    catch(e)
    {
        logs.error(e);
    }
});

export default router;