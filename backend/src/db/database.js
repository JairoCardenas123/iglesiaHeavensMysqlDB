
import config from "./../config.js";
import mysql from "promise-mysql";

const connection = mysql.createConnection({
    host:config.host,
    database:config.database,
    user:config.usuario,
    password:config.password
});

const getConnection = () =>{
    return connection;
}

export default getConnection;

