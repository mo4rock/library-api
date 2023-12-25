const { getConnection } = require('../../src/Mysql');

module.exports = async (req, res) => {
    const { genre } = req.body;
    const connection = await getConnection();

    const [genres] = await connection.query(`
        SELECT 
            id
        FROM
            genre
        WHERE
            name = '${genre}';
    `);

    if (genres.length !== 0) return res.sendStatus(500);

    const [{ insertId: id }] = await connection.query(`
        INSERT INTO genre (
            name
        ) 
        VALUES (
            '${genre}'
        );
    `);

    res.json({id: id, name: genre});
};