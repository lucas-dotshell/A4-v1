import jwt from "jsonwebtoken";
import fs from "fs";

class Certified {
    constructor() {
        this.path = "app/certs/jsonwebtoken.key";
    };
    get(){
        return fs.readFileSync(this.path, { encoding: 'utf8' }, (err, data) => {
            if (err) throw { message: "Can't read certified jwt", level: "high", analitycs: false };
            return data;
        });
    };
}
const cert = new Certified().get();

const createToken = (obj) => {
    if (typeof obj != "object") throw { message: "Date to create token broken", level: "high", analitycs: false };
    let exp = Math.floor(Date().now() / 1000) + 1800;
    const token = jwt.sign({ ...obj, exp }, cert, (error, payload) => {
        if (error || !payload) throw { message: "Error to encode bearer token", level: "low", analitycs: error };
        return `Bearer ${payload}`;
    });
    return {
        token,
        ...obj
    }
};

const validateToken = (header) => {
    const token = header.split("Bearer ");
    if (!token[1]) throw { message: "Token bearer invalid or expired", level: "medium", analitycs: false };
    if (typeof token[1] != "object") throw { message: "Token session invalid", level: "very_high", analitycs: false };
    return jwt.verify(token[1], cert, (error, decoded) => {
        if (error || !decoded) throw { message: "Token session invalid", level: "very_high", analitycs: error };
        return decoded;
    });
};

export { createToken, validateToken }