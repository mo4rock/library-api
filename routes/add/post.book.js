const { getConnection } = require('../../src/Mysql');

module.exports = async (req, res) => {
    const { genreId, name, author, year } = req.body;
    const connection = await getConnection();

    const [book] = await connection.query(`
        SELECT 
            id
        FROM
            book
        WHERE
            genreId = ${genreId} and 
            title = '${name}' and 
            author = '${author}' and 
            year = ${year};
    `);

    if (book.length !== 0) return res.sendStatus(500);

    const [{ insertId: id }] = await connection.query(`
        INSERT INTO book (
            genreId, 
            title, 
            author, 
            year
        ) 
        VALUES (
            ${genreId}, 
            '${name}', 
            '${author}', 
            ${year}
        );
    `);
    
    res.json({id: id, genreId, name, author, year});
};