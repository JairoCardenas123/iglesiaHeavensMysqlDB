import getConnection from "./../db/database.js";

const getCreyentes = async (req,res) => {
    try {
        const connection = await getConnection();
    const result = await connection.query("SELECT ididentificacion, nombres, email, NroCelular, direccion, idBarrio FROM Creyente");
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}

export const methodsHTTP = {
    getCreyentes
}