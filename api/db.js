import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // inserir senha do bd
    database: "" // inserir nome do bd
})
