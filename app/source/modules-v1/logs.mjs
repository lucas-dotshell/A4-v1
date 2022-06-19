import { writeFile } from "fs";
import { ENVROIMENT, VERSION } from "./vars.mjs";

const info = (content) => {
    if (ENVROIMENT == "DEV") console.log(content);
    else {
        let date = new Date();
        writeFile("../info-logs.txt", `INFO[${date}] ${content} [${VERSION}]`)
    }
}

const error = (content) => {
    if (ENVROIMENT == "DEV") console.log(content);
    else {
        let date = new Date();
        writeFile("../error-logs.txt", `ERROR[${date}] ${content} [${VERSION}]`)
    }
}

const warn = (content) => {
    if (ENVROIMENT == "DEV") console.log(content);
    else {
        let date = new Date();
        writeFile("../warn-logs.txt", `WARN[${date}] ${content} [${VERSION}]`)
    }
}

const success = (content) => {
    if (ENVROIMENT == "DEV") console.log(content);
    else {
        let date = new Date();
        writeFile("../success-logs.txt", `SUCCESS[${date}] ${content} [${VERSION}]`)
    }
}

export default { info, warn, error, success }