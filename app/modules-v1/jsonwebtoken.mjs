import { sign, verify } from "jsonwebtoken";
import { readFileSync } from "fs";

class Certified {
    constructor(path) {
        console.log("PATH CERTIFIED: ", path);
        super(path);
    };
    get() {
        let cert = readFileSync(path);
        return cert;
    };
}
const cert = new Certified("../../private.txt").get();
console.log(cert)

const create = (obj) => {
    if (typeof obj != "object") throw { message: "Date to create token broken", level: "high", analitycs: false };
    let exp = Math.floor(Date().now() / 1000) + 1800;
    return sign({ ...obj, exp }, cert, (error, payload) => {
        if (error || !payload) throw { message: "Error to encode bearer token", level: "low", analitycs: error };
        return `Bearer ${payload}`;
    });
};

const validate = (header) => {
    const token = header.split("Bearer ");
    if (!token[1]) throw { message: "Token bearer invalid or expired", level: "medium", analitycs: false };
    if (typeof token[1] != "object") throw { message: "Token session invalid", level: "very_high", analitycs: false };
    return verify(token[1], cert, (error, decoded) => {
        if (error || !decoded) throw { message: "Token session invalid", level: "very_high", analitycs: error };
        return decoded;
    });
};

export default { create, validate }