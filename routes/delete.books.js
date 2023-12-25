const { getConnection } = require('../src/Mysql');

module.exports = async (req, res) => {
    const { genreId } = req.query;
    const connection = await getConnection();
    
    const [genre] = await connection.query(`
        SELECT 
            id
        FROM
            book
        WHERE
            genreId = ${genreId}
    `);
    
    if (genre.length == 0) return res.sendStatus(500);

    await connection.query(`
        DELETE FROM
            book
        WHERE
            genreId = ${genreId}
    `);

    res.sendStatus(204);
};