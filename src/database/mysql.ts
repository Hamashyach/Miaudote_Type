import mysql from "mysql2";

export const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "miaudotedb",
}).promise();