const { createConnection } = require('mysql2/promise');

const getConnection = async () => {
    const {
        MYSQL_HOST,
        MYSQL_USER,
        MYSQL_PASS,
        MYSQL_DB
    } = process.env;
    
    const connection = await createConnection({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB
    });
    
    return connection;
};

module.exports = { getConnection };