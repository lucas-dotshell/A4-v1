import db_conn from "./db_connection.mjs";

export const confirmApiKey = async(header) => {
    if(!header) throw  { message: "This api key is invalid", level: "medium", analitycs: false }
    const conn = await db_conn();
    
}