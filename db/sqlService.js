import mysql from 'promise-mysql';
import config from '../config/config.js';


const connectDb = () => {

    const { dbConnection } = config.load();
    console.log(dbConnection);
    return mysql.createConnection(dbConnection);
}

const sqlSercice = {

    getAll: async() => {
        let connection;
        try {
            connection = await connectDb();
            console.log(connection);
            const todos = await connection.query('SELECT * FROM todo')
            return todos;

        } catch {
            return [];
        } finally {
            if (connection) {
                connection.end()
            }
        }
    },

    getOne: async(id) => {

        let connection;

        try {


            connection = await connectDb();

            return await connection.query('SELECT * from todo WHERE Id=?', [id])

        } catch {
            return null;
        } finally {

            if (connection) {

                connection.end();
            }
        }
    }
}

export default sqlSercice;