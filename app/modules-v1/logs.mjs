import { writeFile } from "fs";
import vars from "./vars.mjs";

const info = (content) => {
    if (vars.envroiment == "DEV") console.log(content);
    else {
        let date = new Date();
        writeFile("../../logs/info.txt", `INFO[${date}] ${content} [${vars.version}]`)
    }
}

const error = (content) => {
    if (vars.envroiment == "DEV") console.log(content);
    else {
        let date = new Date();
        writeFile("../../logs/error.txt", `ERROR[${date}] ${content} [${vars.version}]`)
    }
}

const warn = (content) => {
    if (vars.envroiment == "DEV") console.log(content);
    else {
        let date = new Date();
        writeFile("../../logs/warn.txt", `WARN[${date}] ${content} [${vars.version}]`)
    }
}

const success = (content) => {
    if (vars.envroiment == "DEV") console.log(content);
    else {
        let date = new Date();
        writeFile("../../success.txt", `SUCCESS[${date}] ${content} [${vars.version}]`)
    }
}

export default { info, warn, error, success }